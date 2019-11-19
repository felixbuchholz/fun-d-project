function findWithAttr(array, attr, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

function getCIndex(array, value) {
  return findWithAttr(array, "issueCode", value);
}

export const state = () => ({
  paadingBetweenManagers: 10,
  forceGraphHeight: 0.8,
  centered: false
});

export const mutations = {
  TOGGLE_CENTERED(state) {
    if (state.centered) {
      state.centered = false;
    } else {
      state.centered = true;
    }
  }
};

export const getters = {
  widthManager(state, getters, rootState, rootGetters) {
    // syntax ["store/getter"]
    // Width and height should be relative to the container in the end
    return (
      rootGetters["window/width"] * 0.28 - state.paadingBetweenManagers * 2
    );
  },
  heightManager(state, getters, rootState, rootGetters) {
    return rootGetters["window/height"] * state.forceGraphHeight;
  },
  nodesPerYear(state, getters, rootState, rootGetters) {
    const categories = rootState.proposals.categories;
    let newArray = [];
    for (const manager of rootGetters["proposals/proposalsCurrentYear"]) {
      const coordMap = manager.map(x => {
        let newObject = x;
        newObject.active = x.meanActivist >= 0.5 ? "active" : "passive";
        // newObject.x = getters.centers[getCIndex(categories, x.issue)].x;
        // newObject.y = getters.centers[getCIndex(categories, x.issue)].y;
        // newObject.x = 0;
        // newObject.y = 0;
        // newObject.x = Math.random() * getters.widthManager;
        // newObject.y = Math.random() * getters.widthManager;
        return newObject;
      });
      coordMap.sort(function(proposal1, proposal2) {
        // Sort by votes
        // If the first item has a higher number, move it down
        // If the first item has a lower number, move it up
        const index1 = getCIndex(categories, proposal1.issue);
        const index2 = getCIndex(categories, proposal2.issue);
        if (index1 > index2) return 1;
        if (index1 < index2) return -1;

        // If the votes number is the same between both items, sort alphabetically
        // If the first item comes first in the alphabet, move it up
        // Otherwise move it down
        if (proposal1.meanActivist > proposal2.meanActivist) return 1;
        if (proposal1.meanActivist < proposal2.meanActivist) return -1;
      });
      newArray.push(coordMap);
    }
    return newArray;
  },
  centers(state, getters, rootState) {
    let centersArray = [...Array(rootState.proposals.categories.length)];
    if (state.centered) {
      return centersArray.map(() => ({
        x: getters.widthManager / 2,
        y: getters.heightManager / 2
      }));
    } else {
      const h = getters.heightManager;
      const w = getters.widthManager;
      let xN = w * 0.5;
      if (rootState.year.direction == "positive") {
        xN = w * 1.1;
      } else {
        xN = w * -1;
      }
      const xO = w * -1;
      const x1 = w * 0.4;
      const x2 = w * 0.6;
      const yO = h * 0.5;

      return [
        { xO: xO, xN: xN, x1: x1, x2: x2, yO: yO, y: h * 0.28 },
        // old: 0.20
        { xO: xO, xN: xN, x1: x1, x2: x2, yO: yO, y: h * 0.5 },
        // old: 0.34
        { xO: xO, xN: xN, x1: x1, x2: x2, yO: yO, y: h * 0.72 },
        // old: 0.41
        { xO: xO, xN: xN, x1: x1, x2: x2, yO: yO, y: h * 0.8 },
        // old: 0.58
        { xO: xO, xN: xN, x1: x1, x2: x2, yO: yO, y: h * 0 }
        // old: 0.75
      ];
    }
  }
};
