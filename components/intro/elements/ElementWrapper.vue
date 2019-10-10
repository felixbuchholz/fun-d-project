<template>
  <g class="animation-elements">
    <g
      v-for="(el, index) in elements"
      :id="el.name"
      :key="`icons-${index}`"
      class="first-elements zero-opacity"
      :style="`scale(0)`"
    >
      <g
        class="initial-position"
        :style="`transform:translate(${width * el.x}px, ${height * el.y}px)`"
      >
        <component
          :is="el.name"
          class="center-in-g"
          :style="
            `transform:translate(${el.cX}px, ${el.cY}px) scale(${el.scale})`
          "
        ></component>
      </g>
    </g>
  </g>
</template>

<script>
import { mapGetters } from "vuex";

import piggy from "~/components/intro/elements/piggy.vue";
import house from "~/components/intro/elements/house.vue";
import nestegg from "~/components/intro/elements/nestegg.vue";

export default {
  components: { piggy, house, nestegg },
  data() {
    return {
      elements: [
        { name: "piggy", x: 0.25, y: 0.5, cX: -45, cY: -31, scale: 1 },
        { name: "house", x: 0.5, y: 0.5, cX: -46, cY: -46, scale: 1 },
        { name: "nestegg", x: 0.75, y: 0.5, cX: -41, cY: -46, scale: 1.2 }
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
