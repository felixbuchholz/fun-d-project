import shares from "~/static/data/shares.json";

console.log(shares.length);
export const state = () => ({
  circlePacking: {
    diameterPercent: 30,
    padding: 2
  },
  shares: shares
});

export const getters = {
  diameterPx(state, getters, rootState) {
    // console.log(rootState.window.window.width);
    const width = rootState.window.window.width;
    const height = rootState.window.window.height;
    const widthOrHeight = width < height ? width : height;
    return (state.circlePacking.diameterPercent / 100) * widthOrHeight;
  }
};

export const mutations = {
  CHANGE_CIRCLEPACKING(state, obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        state.circlePacking[prop] = obj[prop];
      }
    }
  },
  CHANGE_SHARES(state, arr) {
    state.shares = arr;
  }
};
