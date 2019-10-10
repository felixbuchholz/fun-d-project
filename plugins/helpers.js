import Vue from "vue";
import helpers from "../assets/js/helpers.js";

const plugin = {
  install() {
    Vue.helpers = helpers;
    Vue.prototype.$helpers = helpers;
  }
};

Vue.use(plugin);
