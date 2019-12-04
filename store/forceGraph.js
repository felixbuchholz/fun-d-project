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
    //──── Structure ─────────────────────────────────────────────────────────────────────────
    // There are (for now) three cases:
    // 1. Vertical positioning by issue category AND horizontal arrangement by activism (2 combined cases)
    // 2. Vertical positioning by year AND horizontal arrangement by activism (2 combined cases)
    // 3. All nodes are centered: this is probably mostly for effect

    // These variables are declared to have a convenient shorthand
    const h = state.height;
    const w = state.width;

    // x1 and x2 are the horizontal positioning for passive / active
    const x1 = w * 0.4;
    const x2 = w * 0.6;
    // y0 is a convenience variable for removing elements, check if still necessary
    const yO = h * 0.5;
    // xO and xN are used to determine where new Nodes come from and where old ones go
    let xN = w * 0.5;
    let xO = w * -1;
    // if going to the next year: new nodes come from the right
    if (rootState.year.direction == "positive") {
      xN = w * 1.1;
      xO = w * -1;
    } else {
      xN = w * -1;
      xO = w * 1.1;
    }

    //──── Switch between case 1 and 2 ───────────────────────────────────────────────────────
    // The centers array will be returned in the end, it’s crucial it’s not empty!
    let centersArray = [];

    // useYearRange is the toggle / control variable in store/year.js,
    // if it is set to * true * the arrangement by years takes priority
    const useYearRange = rootState.year.useYearRange;

    if (useYearRange) {
      // Case 1
      // This has start and end year
      // const currentYearRange = rootState.year.currentYearRange;
      // This contains all years in range
      const currentYearRangeArray = rootGetters["year/currentYearRangeArray"];
      const yearArrayLength = currentYearRangeArray.length;
      // Create an empty array with the length of the yearArray first
      centersArray = [...Array(yearArrayLength)];
      // Create an array with the positions of all years
      // To space out the height evenly we will divide the height by
      // yearArrayLength + 1 (one additional length to center the blobs)
      const evenSpace = h / (yearArrayLength + 1);
      // this is an array with all the positions for every year
      const yArr = [...Array(yearArrayLength)].map(
        (x, i) => (i + 1) * evenSpace
      );
      // console.log(evenSpace, yArr);
      centersArray = centersArray.map((x, i) => {
        // console.log(i, yArr[centersArray.length][i]);
        const yVal = yArr[i];
        return { xO: xO, xN: xN, x1: x1, x2: x2, yO: yO, y: yVal };
      });
    } else {
      // Case 2
      const categories = rootGetters["proposals/categories"];
      centersArray = [...Array(categories.length)];
      const yArr = [
        [0.5],
        [0.33, 0.66],
        [0.25, 0.45, 0.65],
        [0.25, 0.45, 0.65, 0.8],
        [0.25, 0.45, 0.65, 0.8, 0]
      ];

      centersArray = centersArray.map((x, i) => {
        // console.log(i, yArr[centersArray.length][i]);
        const yVal = yArr[centersArray.length - 1][i];
        return { xO: xO, xN: xN, x1: x1, x2: x2, yO: yO, y: h * yVal };
      });
    }

    if (state.centered) {
      // ? Optimization: move this in the first spot
      // Overwrite the specific values with just the center
      return centersArray.map(() => ({
        x: w / 2,
        x1: w / 2,
        x2: w / 2,
        y: h / 2
      }));
    }

    // ! Finally return the centersArray
    return centersArray;
  } // end of centers
}; // end of getters
