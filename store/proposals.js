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
  proposalFilter: {}
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
  }
};

export const getters = {
  // backup is all possible.
  proposalsCurrentYear(state, getters, rootState, rootGetters) {
    // console.log(rootGetters);
    const currentYearRangeArray = rootGetters["year/currentYearRangeArray"];
    const useYearRange = rootState.year.useYearRange;
    let newArray = [];
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
        if (matchesYear) {
          // Check if proposal is active right now
          const checkArray = state.categoriesToggle
            .filter(x => x.activated == true)
            .map(x => x.issueCode);
          const issueIsActive = checkArray.includes(x.issue);
          // if there’s no additional proposal filter *stop* here and
          // return the issue is active boolean value
          // Is filter empty?
          const filterIsEmpty = isEmpty(state.proposalFilter);
          // console.log(state.proposalFilter, filterIsEmpty);
          if (filterIsEmpty) {
            return issueIsActive;
          } else {
            if (issueIsActive) {
              // Plug in the proposal filter to searchjs here :)
              // Documentation: https://github.com/deitch/searchjs
              const match = searchjs.matchObject(x, state.proposalFilter);
              // console.log(x.resolution, state.proposalFilter, match);
              // My own old way to do it:
              // // Check if proposal matches all specific filters
              // // console.log(x[state.proposalFilter.prop]);
              // const matchResults = [];
              // // console.log(state.proposalFilter);
              // for (const condition of state.proposalFilter.array) {
              //   // console.log(condition, condition.prop, x[condition.prop]);
              //   const matchesCondition = x[condition.prop]
              //     .toLowerCase()
              //     .includes(condition.val.toLowerCase());
              //   matchResults.push(matchesCondition);
              // }
              // // Different logical combinations
              // let match = false;
              // if (state.proposalFilter.logic == "and") {
              //   match = matchResults.every(x => x == true);
              // } else if (state.proposalFilter.logic == "or") {
              //   match = matchResults.includes(true);
              // }

              return match;
            }
          }
        }
      });
      newArray.push(yearFilter);
    }
    return newArray;
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
