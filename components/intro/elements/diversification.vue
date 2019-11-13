<template>
  <div
    id="diversification-container"
    class="zero-opacity"
    style="transform: translateX(-50%) translateY(-50%) scale(0);"
  >
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
      </g>
    </svg>
  </div>
</template>

<script>
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
};
</script>
