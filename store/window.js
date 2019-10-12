export const state = () => ({
  window: { width: 360, height: 640, animationFrame: 20 }
});

export const getters = {
  width(state) {
    return state.window.width - state.window.animationFrame * 2;
  },
  height(state) {
    return state.window.height - state.window.animationFrame * 2;
  }
};

// TODO: rewrite, pass more than one parameter
export const mutations = {
  CHANGE_WINDOW(state, obj) {
    state.window[obj.property] = obj.value;
  }
};
