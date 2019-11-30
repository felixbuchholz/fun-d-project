import brProposals from "~/static/data/BR_reduced_18.csv";
import vgProposals from "~/static/data/VG_reduced_18.csv";
import ssProposals from "~/static/data/SS_reduced_18.csv";
//console.log(brProposals);

import * as d3array from "d3-array";

export const state = () => ({
  proposals: [brProposals, vgProposals, ssProposals],
  categoriesToggle: [
    { name: "Environmental", issueCode: "env", activated: false },
    { name: "Social", issueCode: "soc", activated: false },
    { name: "Good Governance", issueCode: "gg", activated: false },
    { name: "Profitability", issueCode: "profit", activated: false },
    { name: "Non-ESG", issueCode: "no-esg", activated: false }
  ]
});

// checking if need to change and activates change.
// This allows for changing the state. Getters are computed properties, automotically updated when state changes.
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
  }
};

export const getters = {
  // backup is all possible.
  proposalsCurrentYear(state, getters, rootState) {
    let newArray = [];
    for (const manager of state.proposals) {
      const yearFilter = manager.filter(x => {
        const checkArray = state.categoriesToggle
          .filter(x => x.activated == true)
          .map(x => x.issueCode);
        // rootstate is info from other element from store: in rootstate you can access all states from
        //all modules. that is how to filter out year
        return x.year == rootState.year.year && checkArray.includes(x.issue);
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
