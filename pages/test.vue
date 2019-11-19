<template>
  <div id="page-container">
    <div class="fast-margin">
      <h2>Test site</h2>
      <Controls />
      <!-- <button @click="toggleCenters">Toggle Centers</button> -->
      <div class="visual_1_container">
        <div class="flex">
          <ForceGraph :manager-index="0" />
          <ForceGraph :manager-index="1" />
          <ForceGraph :manager-index="2" />
        </div>

        <VisualizationText />
      </div>
    </div>
  </div>
</template>

<script>
// import IntroAnimation from "~/components/IntroAnimation.vue";
// import fundblobs from "~/components/intro/elements/fundblobs.vue";
import ForceGraph from "~/components/visualizations/ForceGraph.vue";
import Controls from "~/components/ui/Controls.vue";
import VisualizationText from "~/components/visualizations/VisualizationText.vue";

export default {
  head() {
    return {
      script: [
        { src: "https://d3js.org/d3.v5.min.js" },
        { src: "d3-force-sampled.js" }
      ]
    };
  },
  components: {
    ForceGraph,
    Controls,
    VisualizationText
  },
  data() {
    return {};
  },
  methods: {
    stepEnterHandler(event) {
      console.log(event);
    },
    toggleCenters() {
      this.$store.commit("forceGraph/TOGGLE_CENTERED");
    }
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
