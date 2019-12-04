<template>
  <div class="graph-and-controls-container">
    <DrawingCanvas />
    <YearGrid />
    <div class="manager-group">
      <ForceGraph
        v-for="managerIndex in managers"
        :key="`manager-${managerIndex}`"
        :manager-index="managerIndex"
      />
    </div>
    <GraphControlsDrawer />
  </div>
</template>

<script>
import ForceGraph from "~/components/visualizations/ForceGraph.vue";
import GraphControlsDrawer from "~/components/visualizations/GraphControlsDrawer.vue";
import DrawingCanvas from "~/components/visualizations/DrawingCanvas.vue";
import YearGrid from "~/components/visualizations/YearGrid.vue";

export default {
  components: { ForceGraph, GraphControlsDrawer, DrawingCanvas, YearGrid },
  data() {
    return {
      managers: [0, 1, 2]
      // managers: [1]
    };
  }
};
</script>

<style lang="scss" scoped></style>
