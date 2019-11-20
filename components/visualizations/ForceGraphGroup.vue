<template>
  <div class="manager-group">
    <ForceGraph
      v-for="managerIndex in managers"
      :key="`manager-${managerIndex}`"
      :manager-index="managerIndex"
    />
  </div>
</template>

<script>
import ForceGraph from "~/components/visualizations/ForceGraph.vue";

export default {
  components: { ForceGraph },
  data() {
    return {
      managers: [0, 1, 2]
      // managers: [1]
    };
  }
};
</script>

<style lang="scss" scoped></style>
