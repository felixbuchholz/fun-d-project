import brProposals from "~/static/data/BR_reduced_18.csv";
import vgProposals from "~/static/data/VG_reduced_18.csv";
import ssProposals from "~/static/data/SS_reduced_18.csv";
console.log(brProposals);

export const state = () => ({
  proposals: [brProposals, vgProposals, ssProposals],
  categories: [
    { name: "Good Governance", issueCode: "gg" },
    { name: "Environmental", issueCode: "env" },
    { name: "Social", issueCode: "soc" },
    { name: "Profitability", issueCode: "profit" },
    { name: "Non-ESG", issueCode: "no-esg" }
  ]
});

export const getters = {
  proposalsCurrentYear(state, getters, rootState, rootGetters) {
    let newArray = [];
    for (const manager of state.proposals) {
      const yearFilter = manager.filter(
        x => x.year == rootState.year.year && x.issue != "no-esg"
      );
      newArray.push(yearFilter);
    }
    return newArray;
  }
};
