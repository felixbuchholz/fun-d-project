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
  centered: true
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
    return rootGetters["window/width"] / 3 - state.paadingBetweenManagers * 2;
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
        // newObject.x = getters.centers[getCIndex(categories, x.issue)].x;
        // newObject.y = getters.centers[getCIndex(categories, x.issue)].y;
        // newObject.x = 0;
        // newObject.y = 0;
        newObject.x = Math.random() * getters.widthManager;
        newObject.y = Math.random() * getters.widthManager;
        return newObject;
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
      return [
        { x: getters.widthManager * 0.5, y: getters.heightManager * 0.28 }, // old: 0.20
        { x: getters.widthManager * 0.5, y: getters.heightManager * 0.5 }, // old: 0.34
        { x: getters.widthManager * 0.5, y: getters.heightManager * 0.72 }, // old: 0.41
        { x: getters.widthManager * 0.5, y: getters.heightManager * 0.85 }, // old: 0.58
        { x: getters.widthManager * 0.5, y: getters.heightManager * 0 } // old: 0.75
      ];
    }
  }
};
