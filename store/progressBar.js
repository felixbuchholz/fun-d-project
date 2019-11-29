export const state = () => ({
  progress: 0
});

export const getters = {
  transform(state) {
    return state.progress - 100;
  }
};

export const mutations = {
  CHANGE_PROGRESS(state, val) {
    state.progress = val;
  }
};
