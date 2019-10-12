<template>
  <g class="animation-elements">
    <g
      v-for="(el, index) in elements"
      :id="el.name"
      :key="`icons-${index}`"
      class="initial-position first-elements zero-opacity"
      :style="
        `transform: translateX(${el.x}%) translateY(${el.y}%) scale(${
          el.initialScale ? el.initialScale : 0
        }`
      "
    >
      <component
        :is="el.name"
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

export default {
  components: { piggy, house, nestegg, passivegraph },
  data() {
    return {
      elements: [
        { name: "piggy", x: 25, y: 50, cX: -45, cY: -31 },
        { name: "house", x: 50, y: 50, cX: -46, cY: -46 },
        { name: "nestegg", x: 75, y: 50, cX: -41, cY: -46, elementScale: 1.2 },
        { name: "passivegraph", x: 50, y: 50, cX: -430, cY: -232 }
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
