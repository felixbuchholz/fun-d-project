export const state = () => ({
  currentTitle: {
    title:
      "<p class='center'>How do people approach their <br> <span class='bold'>financial future?</span></p>",
    x: 0,
    y: 0
  }
});

export const mutations = {
  CHANGE_CURRENT_TITLE(state, obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        state.currentTitle[prop] = obj[prop];
      }
    }
  }
};
