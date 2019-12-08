<template>
  <div class="graph-and-controls-container">
    <DrawingCanvas />
    <YearGrid />

    <div class="manager-group">
      <!-- legend -->
      <transition name="fade" mode="out-in">
        <div
          v-if="legendActive == true"
          ref="intro-legend-div"
          class="visual-intro-div"
        >
          <img
            class="legend-img"
            src="legend.jpg"
            alt="An image for the legend for now."
          />
          <!-- <p>
          We looked at how these three asset management firms compare in terms
          of siding with or against management.
          <br />We zoom in on proposals brought by shareholders, and categorize
          those by topics. We focus on three main categories:
        </p>
        <ul>
          <li class="env_li">
            <span>environmental</span> topics
          </li>
          <li class="soc_li">
            <span>social</span>
          </li>
          <li class="gov_li">
            <span>governance</span>
          </li>
        </ul>

                <p>
          Darker
          <span class="gov_li" style="vertical-align: -2px">&#8226;</span>:
          manager voted against management for that agenda item across most of
          its funds. <br />Lighter
          <span class="gov_li_light" style="vertical-align: -2px">&#8226;</span>
          : manager supported the company's management.
        </p>
 -->
        </div>
      </transition>

      <ForceGraph
        v-for="managerIndex in managers"
        :key="`manager-${managerIndex}`"
        :manager-index="managerIndex"
      />
    </div>
    <GraphControlsDrawer />
    
    <hr />



  </div>

</template>

<script>
import ForceGraph from "~/components/visualizations/ForceGraph.vue";
import GraphControlsDrawer from "~/components/visualizations/GraphControlsDrawer.vue";
import DrawingCanvas from "~/components/visualizations/DrawingCanvas.vue";
import YearGrid from "~/components/visualizations/YearGrid.vue";
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      legendActive: state => state.forceGraph.legendActive
    })
  },
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
