<template>
  <div class="graph-and-controls-container">
    <DrawingCanvas />
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

export default {
  components: { ForceGraph, GraphControlsDrawer, DrawingCanvas },
  data() {
    return {
      managers: [0, 1, 2]
      // managers: [1]
    };
  }
};
</script>

<style lang="scss" scoped></style>
