export const state = () => ({
  year: 2012,
  yearRange: [2010, 2018],
  direction: "positive",
  currentYearRange: [2010, 2018],
  useYearRange: false,
  activateYearButtons: false
});

export const getters = {
  currentYearRangeArray(state) {
    const currentYearDifference =
      state.currentYearRange[1] - state.currentYearRange[0];
    return [...Array(currentYearDifference + 1)].map(
      (x, i) => state.currentYearRange[0] + i
    );
  }
};

export const mutations = {
  CHANGE_YEAR(state, val) {
    // !weird logic
    const oldValue = state.year;
    if (val == 1 || val == -1) {
      state.year += val;
    } else if (val >= state.yearRange[0] && val <= state.yearRange[1]) {
      state.year = val;
    } else {
      // TODO make this an event with user feedback
      console.log(
        "Value is out of the accepted ranges @ the CHANGE_YEAR mutation"
      );
    }
    // change direction
    if (oldValue < state.year) {
      state.direction = "positive";
    } else {
      state.direction = "negative";
    }
  },
  SET_USE_YEAR_RANGE(state, bool) {
    state.useYearRange = bool;
  },
  SET_CURRENT_YEAR_RANGE(state, array) {
    state.currentYearRange = array;
  },
  SET_ACTIVATE_YEAR_BUTTONS(state, bool) {
    state.activateYearButtons = bool;
  }
};
