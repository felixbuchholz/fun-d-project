import brProposals from "~/static/data/BR_reduced_18.csv";
import vgProposals from "~/static/data/VG_reduced_18.csv";
import ssProposals from "~/static/data/SS_reduced_18.csv";
console.log(brProposals);

export const state = () => ({
  proposals: [brProposals, vgProposals, ssProposals],
  categoriesToggle: [
    { name: "Environmental", issueCode: "env", activated: true },
    { name: "Social", issueCode: "soc", activated: true },
    { name: "Good Governance", issueCode: "gg", activated: true },
    { name: "Profitability", issueCode: "profit", activated: true },
    { name: "Non-ESG", issueCode: "no-esg", activated: false }
  ]
});

export const mutations = {
  SET_ACTIVE_CATEGORIES(state, array) {
    for (const element of state.categoriesToggle) {
      if (array.includes(element.issueCode)) {
        element.activated = true;
      } else {
        element.activated = false;
      }
    }
  }
};

export const getters = {
  proposalsCurrentYear(state, getters, rootState) {
    let newArray = [];
    for (const manager of state.proposals) {
      const yearFilter = manager.filter(x => {
        const checkArray = state.categoriesToggle
          .filter(x => x.activated == true)
          .map(x => x.issueCode);
        return x.year == rootState.year.year && checkArray.includes(x.issue);
      });
      newArray.push(yearFilter);
    }
    return newArray;
  },
  categories(state) {
    return state.categoriesToggle.filter(x => x.activated == true);
  }
};
