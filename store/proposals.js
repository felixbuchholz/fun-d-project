import brProposals from "~/static/data/BR_reduced_18.csv";
console.log(brProposals);

export const state = () => ({
  br: brProposals
});

export const getters = {
  brCurrentYear(state, getters, rootState) {
    const yearFilter = state.br.filter(
      x => x.year == rootState.year.year && x.issue != "no-esg"
    );
    const coordMap = yearFilter.map(x => {
      let newObject = x;
      newObject.x = Math.random() * 1200;
      newObject.y = Math.random() * 700;
      return newObject;
    });
    return coordMap;
  }
};
