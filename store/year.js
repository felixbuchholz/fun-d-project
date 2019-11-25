export const state = () => ({
  year: 2014,
  yearRange: [2009, 2018],
  direction: "positive"
});

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
  }
};
