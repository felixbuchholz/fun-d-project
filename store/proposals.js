import brProposals from "~/static/data/BR_reduced_18.csv";
import vgProposals from "~/static/data/VG_reduced_18.csv";
import ssProposals from "~/static/data/SS_reduced_18.csv";
console.log(brProposals);

import * as d3array from "d3-array";
import * as searchjs from "searchjs";

export const state = () => ({
  proposals: [brProposals, vgProposals, ssProposals],
  categoriesToggle: [
    { name: "Environmental", issueCode: "env", activated: false },
    { name: "Social", issueCode: "soc", activated: false },
    { name: "Good Governance", issueCode: "gg", activated: false },
    { name: "Profitability", issueCode: "profit", activated: false },
    { name: "Non-ESG", issueCode: "no-esg", activated: false }
  ],
  areDistinctOutlinesActive: false,
  proposalFilter: {},
  isPassedFilterActive: false
});

// checking if need to change and activates change.
// This allows for changing the state. Getters are computed properties, automatically updated when state changes.
// Mutations connects with visulaitiontext.vue - there the methods are committed and then available to use in scrolllmaa
export const mutations = {
  SET_ACTIVE_CATEGORIES(state, array) {
    for (const element of state.categoriesToggle) {
      if (array.includes(element.issueCode)) {
        // loop, if passed array includes that element, then activated.
        element.activated = true; // only those updated are passed to component.
      } else {
        element.activated = false; // in getters its going away due to filter method.
      }
    }
  },
  SET_ARE_DISTINCT_OUTLINES_ACTIVE(state, bool) {
    state.areDistinctOutlinesActive = bool;
  },
  UPDATE_PROPOSAL_FILTER(state, obj) {
    state.proposalFilter = obj;
  },
  SET_IS_PASSED_FILTER_ACTIVE(state, bool) {
    state.isPassedFilterActive = bool;
  }
};

export const getters = {
  // backup is all possible.
  proposalsCurrentYear(state, getters, rootState, rootGetters) {
    // console.log(rootGetters);
    const currentYearRangeArray = rootGetters["year/currentYearRangeArray"];
    const useYearRange = rootState.year.useYearRange;
    // let newArray = [];
    // Reconfigure in steps
    let filterState = [];

    //──── Filter for year / -range ────────────────────────────────────────────────────────────
    for (const manager of state.proposals) {
      const yearFilter = manager.filter(x => {
        let matchesYear = false;
        if (!useYearRange) {
          // rootstate is info from other element from store: in rootstate you can access all states from
          // all modules. that is how to filter out year
          matchesYear = x.year == rootState.year.year;
        } else {
          matchesYear = currentYearRangeArray.includes(x.year);
        }
        return matchesYear;
      });
      filterState.push(yearFilter);
    }
    //──── Filter for issue category ─────────────────────────────────────────────────────────

    for (let index = 0; index < filterState.length; index++) {
      const manager = filterState[index];
      const issueFilter = manager.filter(x => {
        const checkArray = state.categoriesToggle
          .filter(x => x.activated == true)
          .map(x => x.issueCode);
        const issueIsActive = checkArray.includes(x.issue);
        return issueIsActive;
      });
      filterState[index] = issueFilter;
    }

    //──── Optional: Filter for specific filter ─────────────────────────────────────────────────

    const filterIsEmpty = isEmpty(state.proposalFilter);
    if (!filterIsEmpty) {
      for (let index = 0; index < filterState.length; index++) {
        const manager = filterState[index];
        const specificFilter = manager.filter(x => {
          const match = searchjs.matchObject(x, state.proposalFilter);
          return match;
        });
        filterState[index] = specificFilter;
      }
    }

    //──── Optional: Proposal passed filter ──────────────────────────────────────────────────

    if (state.isPassedFilterActive) {
      for (let index = 0; index < filterState.length; index++) {
        const manager = filterState[index];
        const passedFilter = manager.filter(x => {
          const passedIsNotNull = x.passed ? true : false;
          return passedIsNotNull;
        });
        filterState[index] = passedFilter;
      }
    }

    //──── Finally: return filterState ───────────────────────────────────────────────────────

    return filterState;
  },
  categories(state) {
    return state.categoriesToggle.filter(x => x.activated == true);
  },
  proposalsByCompany(state, getters) {
    let newArray = [];
    for (const manager of getters.proposalsCurrentYear) {
      let groupedByCompany = d3array.groups(manager, d => d.company);
      groupedByCompany = groupedByCompany.sort((a, b) => {
        const proposalsA = a[1].length;
        const proposalsB = b[1].length;
        if (proposalsA < proposalsB) return 1;
        if (proposalsA > proposalsB) return -1;
      });
      // console.log(groupedByCompany);
      newArray.push(groupedByCompany);
    }

    return newArray;
  }
};

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}
