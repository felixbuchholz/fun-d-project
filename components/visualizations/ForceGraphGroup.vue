<template>
  <div class="graph-and-controls-container">
    <div class="manager-group">
      <ForceGraph
        v-for="managerIndex in managers"
        :key="`manager-${managerIndex}`"
        :manager-index="managerIndex"
      />
      <i></i>
    </div>
    <GraphControlsDrawer />
  </div>
</template>

<script>
import ForceGraph from "~/components/visualizations/ForceGraph.vue";
import GraphControlsDrawer from "~/components/visualizations/GraphControlsDrawer.vue";

export default {
  components: { ForceGraph, GraphControlsDrawer },
  data() {
    return {
      managers: [0, 1, 2]
      // managers: [1]
    };
  }
};
</script>

<style lang="scss" scoped></style>
