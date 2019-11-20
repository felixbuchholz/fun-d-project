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
  centered: false,
  width: 350,
  height: 600,
  animationIndex: 0
});

export const mutations = {
  TOGGLE_CENTERED(state) {
    if (state.centered) {
      state.centered = false;
    } else {
      state.centered = true;
    }
  },
  CHANGE_MANAGER_SIZE(state, obj) {
    state[obj.property] = obj.value;
  },
  CHANGE_ANIMATION_INDEX(state, val) {
    // console.log(val);
    state.animationIndex = val;
  }
};

export const getters = {
  nodesPerYear(state, getters, rootState, rootGetters) {
    const categories = rootGetters["proposals/categories"];
    let newArray = [];
    let justForReactionToWidth = state.width;
    for (const manager of rootGetters["proposals/proposalsCurrentYear"]) {
      const coordMap = manager.map(x => {
        let newObject = x;
        newObject.active = x.meanActivist >= 0.5 ? "active" : "passive";
        // newObject.x = getters.centers[getCIndex(categories, x.issue)].x;
        // newObject.y = getters.centers[getCIndex(categories, x.issue)].y;

        // newObject.x = Math.random() * getters.width;
        // newObject.y = Math.random() * getters.width;
        return newObject;
      });
      coordMap.sort(function(proposal1, proposal2) {
        const index1 = getCIndex(categories, proposal1.issue);
        const index2 = getCIndex(categories, proposal2.issue);
        if (index1 > index2) return 1;
        if (index1 < index2) return -1;
        if (proposal1.meanActivist > proposal2.meanActivist) return 1;
        if (proposal1.meanActivist < proposal2.meanActivist) return -1;
      });
      newArray.push(coordMap);
    }
    return newArray;
  },
  centers(state, getters, rootState, rootGetters) {
    let centersArray = [...Array(rootGetters["proposals/categories"].length)];
    const h = state.height;
    const w = state.width;
    if (state.centered) {
      return centersArray.map(() => ({
        x: w / 2,
        y: h / 2
      }));
    } else {
      let xN = w * 0.5;
      let xO = w * -1;
      if (rootState.year.direction == "positive") {
        xN = w * 1.1;
        xO = w * -1;
      } else {
        xN = w * -1;
        xO = w * 1.1;
      }
      const x1 = w * 0.4;
      const x2 = w * 0.6;
      const yO = h * 0.5;

      const yArr = [
        [0.5],
        [0.33, 0.66],
        [0.25, 0.45, 0.65],
        [0.25, 0.45, 0.65, 0.8],
        [0.25, 0.45, 0.65, 0.8, 0]
      ];

      return centersArray.map((x, i) => {
        // console.log(i, yArr[centersArray.length][i]);
        const yVal = yArr[centersArray.length - 1][i];
        return { xO: xO, xN: xN, x1: x1, x2: x2, yO: yO, y: h * yVal };
      });
    }
  }
};
