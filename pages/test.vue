<template>
  <div id="page-container">
    <div id="fast-small-padding">
      <h1>Test site</h1>
      <p>Scrolly telling experiments</p>
      <!-- <button @click="toggleCenters">Toggle Centers</button> -->
      <div id="scrolly-telling-1-container">
        <VisualizationText />
        <ForceGraphGroup />
      </div>
    </div>
  </div>
</template>

<script>
import ForceGraphGroup from "~/components/visualizations/ForceGraphGroup.vue";
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
    ForceGraphGroup,
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
#fast-small-padding {
  padding: 20px;
}
</style>
