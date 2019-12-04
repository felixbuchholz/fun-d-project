<template>
  <div class="grid zero-opacity">
    <div
      v-for="(year, i) in currentYearRangeArray"
      :key="`year-${year}`"
      class="grid-line-container"
    >
      <!-- Solved spacing with flex instead -->
      <!-- :style="
        `transform: translateY(${(height / (currentYearRangeArray.length + 2)) *
          (i + 1) -
          7}px)`
      "-->
      <div class="grid-line"></div>
      <div class="grid-year left">{{ year }}</div>
      <div class="grid-line center"></div>
      <div class="grid-year right">{{ year }}</div>
      <div class="grid-line"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      height: state => state.forceGraph.height
    }),
    ...mapGetters({
      currentYearRangeArray: [`year/currentYearRangeArray`]
    })
  }
};
</script>

<style lang="scss" scoped>
.quick-center {
  position: absolute;
  top: 60%;
  left: 60%;
  transform: scale(2.5);
}
path {
  stroke: #666;
  stroke-width: 2px;
  fill: none;
}
</style>
