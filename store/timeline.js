import anime from "animejs/lib/anime.es.js";

// define timeline
export const state = () => ({
  tl: {}
});

export const mutations = {
  INIT_TIMELINE(state, obj) {
    state.tl = obj;
  }
};
