export default {
  getViewportSize() {
    var e = window;
    var a = "inner";
    if (!("innerWidth" in window)) {
      a = "client";
      e = document.documentElement || document.body;
    }
    return { width: e[a + "Width"], height: e[a + "Height"] };
  },
  resize(that) {
    that.$store.commit("window/CHANGE_WINDOW", {
      property: "height",
      value: that.$helpers.getViewportSize().height
    });
    that.$store.commit("window/CHANGE_WINDOW", {
      property: "width",
      value: that.$helpers.getViewportSize().width
    });
  },
  changeTitle(that, obj) {
    that.$store.commit("timeline/CHANGE_CURRENT_TITLE", obj);
  }
};
