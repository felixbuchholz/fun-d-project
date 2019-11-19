import Vue from "vue";
import intersectionOberser from "intersection-observer";
import Scrollama from "vue-scrollama";

Vue.component('Scrollama', Scrollama);
Vue.use(intersectionOberser)