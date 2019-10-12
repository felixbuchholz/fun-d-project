// passive state
export const state = () => ({
  window: { width: 360, height: 640, animationFrame: 20 }
});

// Automatic active: in case something changes in the state, this is a recalculation
export const getters = {
  width(state) {
    return state.window.width - state.window.animationFrame * 2;
  },
  height(state) {
    return state.window.height - state.window.animationFrame * 2;
  }
};

// TODO: rewrite, pass more than one parameter
// Tool to change. In case you somewhere in the program want to change something, this responds
export const mutations = {
  CHANGE_WINDOW(state, obj) {
    state.window[obj.property] = obj.value;
  }
};
