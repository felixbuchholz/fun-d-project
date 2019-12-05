<template>
  <div id="page-container">
    <div id="fast-small-padding">
      <h1>Test site</h1>
      <p>Scrolly telling experiments</p>
      <div id="scrolly-telling-1-container">
        <VisualizationText />
        <ForceGraphGroup />
      </div>
    </div>
  </div>
</template>

<script>
import ForceGraphGroup from "~/components/visualizations/ForceGraphGroup.vue";
import VisualizationText from "~/components/visualizations/VisualizationText.vue";

import * as searchjs from "searchjs";

export default {
  head() {
    // return {
    //   script: [
    //     { src: "https://d3js.org/d3.v5.min.js" },
    //     { src: "d3-force-sampled.js" }
    //   ]
    // };
  },
  components: {
    ForceGraphGroup,
    VisualizationText
  },
  data() {
    return {};
  },
  created() {
    //──── searchjs tests ────────────────────────────────────────────────────────────────────
    // console.log(searchjs);
    // const testArray = [
    //   {
    //     thing: "apple",
    //     roundness: 7,
    //     saying: "An apple a day keeps the doctor away."
    //   },
    //   {
    //     thing: "something",
    //     roundness: 0,
    //     saying: "Something always goes wrong."
    //   }
    // ];
    // console.log(
    //   searchjs.matchObject(testArray[0], { thing: "app", _start: true })
    // );
  },
  methods: {
    stepEnterHandler(event) {
      console.log(event);
    }
    // toggleCenters() {
    //   this.$store.commit("forceGraph/TOGGLE_CENTERED");
    // }
  }
};
</script>

<style lang="scss">
#fast-small-padding {
  padding: 20px;
}
</style>
