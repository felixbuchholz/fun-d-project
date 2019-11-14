<template>
  <div id="page-container">
    <div class="fast-margin">
      <h2>Test site</h2>
      <Controls />
      <ForceGraph />
    </div>
  </div>
</template>

<script>
// import IntroAnimation from "~/components/IntroAnimation.vue";
// import fundblobs from "~/components/intro/elements/fundblobs.vue";
import ForceGraph from "~/components/visualizations/ForceGraph.vue";
import Controls from "~/components/ui/Controls.vue";

export default {
  components: {
    ForceGraph,
    Controls
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.fast-margin {
  margin: 20px 20px;
  & div {
    margin: 8px 0;
  }
}
</style>
