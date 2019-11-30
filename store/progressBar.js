export const state = () => ({
  progress: 0,
  processCounter: 0
});

export const getters = {
  transform(state) {
    return state.progress - 100;
  }
};

export const mutations = {
  CHANGE_PROGRESS(state, val) {
    state.progress = val;
  },
  CHANGE_PROCESS_COUNTER(state, val) {
    if (val == 0) {
      state.processCounter = 0;
    } else {
      state.processCounter += val;
    }
  }
};
