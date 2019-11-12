<template>
  <div>
    <svg :width="diameter" :height="diameter">
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
import anime from "animejs/lib/anime.es.js";
import chroma from "chroma-js";
import { hierarchy, pack } from "d3-hierarchy";

export default {
  props: {
    numberOfCircles: {
      type: Number,
      default: 100
    },
    diameter: {
      type: Number,
      default: 100
    },
    padding: {
      type: Number,
      default: 2
    },
    variation: {
      type: Array,
      default: function() {
        return [1, 100];
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    childElements() {
      const array = [...Array(this.numberOfCircles)].map(() => {
        return {
          amount: this.$helpers.getRandomArbitrary(...this.variation),
          color: this.$helpers.getRandomColorHex()
        };
      });
      return array;
    },
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
        .size([this.diameter, this.diameter])
        .padding(this.padding)(rootHierarchy);
    }
  }
};
</script>
