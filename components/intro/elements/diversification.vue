<template>
  <div>
    <svg :width="diameterPx" :height="diameterPx">
      <!-- <circle
        id="diversification-circle-background"
        :cx="diameterPx / 2"
        :cy="diameterPx / 2"
        :r="diameterPx / 2"
      />-->
      <g
        v-for="(childElement, index) in layoutData.children"
        :key="`childElement-${index}`"
        class="childElement"
        :style="{
          transform: `translate(${childElement.x}px, ${childElement.y}px)`
        }"
      >
        <circle
          class="childElement-circle"
          :r="childElement.r"
          :fill="childElement.data.color"
        />
        <!-- <text class="childElement-label">{{ childElement.data.imglink }}</text> -->
      </g>
    </svg>
    <!-- <button @click="grow">grow</button>
    <button @click="shrink">shrink</button>-->
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import { hierarchy, pack } from "d3-hierarchy";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      circlePacking: state => state.diversification.circlePacking,
      childElements: state => state.diversification.shares
    }),
    ...mapGetters({
      diameterPx: ["diversification/diameterPx"]
    }),
    transformedData() {
      return {
        name: "Top Level",
        children: this.childElements.map(child => ({
          ...child,
          size: child.amount,
          parent: "Top Level"
        }))
      };
    },

    layoutData() {
      // Generate a D3 hierarchy
      const rootHierarchy = hierarchy(this.transformedData)
        .sum(d => d.size)
        .sort((a, b) => {
          return b.value - a.value;
        });

      // Pack the circles inside the viewbox
      return pack()
        .size([this.diameterPx, this.diameterPx])
        .padding(this.circlePacking.padding)(rootHierarchy);
    }
  }
  // methods: {
  //   grow() {
  //     this.$store.commit("diversification/CHANGE_CIRCLEPACKING", {
  //       diameter: 600
  //     });
  //   },
  //   shrink() {
  //     this.$store.commit("diversification/CHANGE_CIRCLEPACKING", {
  //       diameter: 200
  //     });
  //   }
  // }
};
</script>

<style lang="scss" scoped>
#diversification-circle-background {
  fill: #fafafa;
}
</style>
