<template>
  <g id="animation-elements">
    <!-- initial-position -->
    <g
      v-for="(el, index) in elements"
      :id="el.name ? el.name : el.class + '-' + index"
      :key="`icons-${index}`"
      :class="`${el.class ? el.class : ''} zero-opacity`"
      :style="
        `transform: translateX(${el.x}%) translateY(${el.y}%) scale(${
          el.initialScale ? el.initialScale : 0
        }`
      "
    >
      <component
        :is="el.comp ? el.comp : el.name"
        class="center-in-g"
        :style="
          `transform:translate(${el.cX}px, ${el.cY}px) scale(${
            el.elementScale ? el.elementScale : 1
          })`
        "
      ></component>
    </g>
  </g>
</template>

<script>
import { mapGetters } from "vuex";

import piggy from "~/components/intro/elements/piggy.vue";
import house from "~/components/intro/elements/house.vue";
import nestegg from "~/components/intro/elements/nestegg.vue";
import passivegraph from "~/components/intro/elements/passivegraph.vue";
import newelement from "~/components/intro/elements/newelement.vue";
import haystack from "~/components/intro/elements/haystack.vue";
import magnifier from "~/components/intro/elements/magnifier.vue";
import brh from "~/components/intro/elements/blackrockhouse.vue";
import vh from "~/components/intro/elements/vanguardhouse.vue";
import ssh from "~/components/intro/elements/statestreethouse.vue";
import equals from "~/components/intro/elements/equals.vue";
import agenda from "~/components/intro/elements/agenda.vue";
import companycircle from "~/components/intro/elements/companycircle.vue";
import arrow from "~/components/intro/elements/arrow.vue";
import voteyes from "~/components/intro/elements/voteyes.vue";
import voteno from "~/components/intro/elements/voteno.vue";
import smallslice from "~/components/intro/elements/smallslice.vue";
import bigslice from "~/components/intro/elements/bigslice.vue";

export default {
  components: {
    piggy,
    house,
    nestegg,
    passivegraph,
    newelement,
    haystack,
    magnifier,
    brh,
    vh,
    ssh,
    equals,
    agenda,
    companycircle,
    arrow,
    voteyes,
    voteno,
    smallslice,
    bigslice
  },
  data() {
    return {
      elements: [
        { name: "piggy", x: 25, y: 50, cX: -45, cY: -31 },
        { name: "house", x: 50, y: 50, cX: -46, cY: -46 },
        { name: "nestegg", x: 75, y: 50, cX: -41, cY: -46, elementScale: 1.2 },
        { name: "passivegraph", x: 50, y: 50, cX: -430, cY: -232 },
        { name: "newelement", x: 50, y: 50, cX: -13.5, cY: -13.5 },
        { name: "haystack", x: 50, y: 48.5, cX: -134, cY: -76 },
        { name: "magnifier", x: 53.25, y: 50, cX: -105, cY: -72 },
        { name: "vh", x: 50, y: 45, cX: -100, cY: -80, class: "mgmt-house" },
        { name: "brh", x: 25, y: 45, cX: -100, cY: -104, class: "mgmt-house" },
        { name: "ssh", x: 75, y: 45, cX: -89, cY: -75, class: "mgmt-house" },
        { name: "equals", x: 55, y: 50, cX: -35, cY: -16 },
        { name: "companycircle", x: 25, y: 50, cX: 0, cY: 0 },
        { name: "agenda", x: 25, y: 50, cX: -109, cY: -170 },
        { name: "arrow", x: 35, y: 50, cX: -73.5, cY: -22 },
        { name: "voteyes1", x: 50, y: 38, cX: -19.5, cY: -38, comp: "voteyes" },
        { name: "voteno1", x: 50, y: 50, cX: -19.5, cY: -38, comp: "voteno" },
        { name: "voteno2", x: 50, y: 62, cX: -19.5, cY: -38, comp: "voteyes" },
        { x: 36, y: 45, cX: -19.5, cY: -38, comp: "voteno", class: "voteno" },
        { x: 36, y: 45, cX: -19.5, cY: -38, comp: "voteno", class: "voteno" },
        { x: 36, y: 45, cX: -19.5, cY: -38, comp: "voteno", class: "voteno" },
        { x: 36, y: 45, cX: -19.5, cY: -38, comp: "voteno", class: "voteno" },
        { x: 36, y: 45, cX: -19.5, cY: -38, comp: "voteno", class: "voteno" },
        { x: 36, y: 45, cX: -19.5, cY: -38, comp: "voteno", class: "voteno" },
        { x: 36, y: 45, cX: -19.5, cY: -38, comp: "voteno", class: "voteno" },
        { name: "smallslice", x: 36, y: 60, cX: -50, cY: -50 },
        { name: "voteyes2", x: 70, y: 60, cX: -19.5, cY: -38, comp: "voteyes" },
        { name: "bigslice", x: 70, y: 60, cX: -50, cY: -50 }
      ]
    };
  },
  computed: {
    ...mapGetters({
      width: ["window/width"],
      height: ["window/height"]
    })
  }
};
</script>
