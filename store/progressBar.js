export const state = () => ({
  progress: 0,
  processCounter: 0,
  nodeChangeCounter: 0,
  stepArray: [],
  animationDuration: 200,
  browsingYears: false
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
  },
  INCREMENT_NODE_CHANGE_COUNTER(state) {
    state.nodeChangeCounter++;
  },
  ADD_TO_STEP_ARRAY(state, val) {
    state.stepArray.push(val);
  },
  CLEAR_STEP_ARRAY(state) {
    state.stepArray = [];
  },
  REMOVE_LAST_FROM_STEP_ARRAY(state) {
    state.stepArray.pop();
  },
  UPDATE_ANIMATION_DURATION(state, val) {
    state.animationDuration = val;
  },
  UPDATE_BROWSING_YEARS(state, bool) {
    state.browsingYears = bool;
  }
};
