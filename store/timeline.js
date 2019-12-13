export const state = () => ({
  currentTitle: {
    x: 0,
    y: 0,
    scale: 0,
    opacity: 0,
    title: ""
  },
  soundLoaded: false
});

export const mutations = {
  CHANGE_CURRENT_TITLE(state, obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        state.currentTitle[prop] = obj[prop];
      }
    }
  },
  SET_SOUND_LOADED(state) {
    state.soundLoaded = true;
  }
};
