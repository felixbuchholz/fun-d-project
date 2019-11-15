<template>
  <!-- // https://codepen.io/koumoul/pen/XMGOdJ -->
  <div>
    <h3>{{ managers[managerIndex].name }}</h3>
    <!-- <button @click="changeForces">Toggle center</button> -->
    <div class="svg-container">
      <svg class="svg-element" :width="width" :height="height">
        <rect :width="width" :height="height" class="svg-background" />
        <circle
          v-for="(node, i) in nodes"
          :key="`nodes-${i}`"
          :cx="coords[i].x"
          :cy="coords[i].y"
          :r="circle.radius"
          :class="
            `mean-activist-circle mean-activist-${
              node.meanActivist > 0.5 ? 'yes' : 'no'
            } ${node.issue}`
          "
        />
        <!-- @mousedown="currentMove = {x: $event.screenX, y: $event.screenY, node: node}" -->
      </svg>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
// import * as forceManyBodySampled from "d3-force-sampled";

import { mapState, mapGetters } from "vuex";

export default {
  props: {
    managerIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      circle: { radius: 4, padding: 1 },
      nodes: [],
      simulation: null,
      centered: true,
      isGraphInitialized: false
    };
  },
  computed: {
    ...mapState({
      managers: state => state.managers.managers,
      categories: state => state.proposals.categories
    }),
    ...mapGetters({
      width: ["forceGraph/widthManager"],
      height: ["forceGraph/heightManager"],
      nodesStore: [`forceGraph/nodesPerYear`],
      centers: [`forceGraph/centers`]
    }),
    coords() {
      return this.nodes.map(node => {
        return {
          x: node.x,
          y: node.y
        };
      });
    }
  },
  watch: {
    nodesStore() {
      // console.log("nodesStore has changed");
      this.initGraphOnDataChange();
    },
    centers() {
      console.log("centers have changed");
      if (this.isGraphInitialized) {
        this.updateGraphOnParameterChange();
      }
    }
  },
  created() {
    // console.log(d3);
    this.initGraphOnDataChange();
  },
  mounted() {},
  methods: {
    ticked() {
      // ticked has no parameter!
      // console.log("tick");
    },
    initGraphOnDataChange() {
      this.nodes = this.$helpers.getArrayOfObjectsCopy(
        this.nodesStore[this.managerIndex]
      );
      // console.log(this.nodes.length);
      setTimeout(() => {
        this.simulate();
      }, 1000 * this.managerIndex + 50);
    },
    getIndexByIssue(issue) {
      // console.log(this.categories);
      const index = this.$helpers.findWithAttr(
        this.categories,
        "issueCode",
        issue
      );
      // console.log(index);
      return index;
    },
    updateGraphOnParameterChange() {
      const that = this;
      this.simulation
        .force("x")
        // .strength(function(d) {
        //   // return d.meanActivist == 1 ? 0.3 : 0.2;
        //   return 0.5;
        // })
        .x(function(d) {
          return that.centers[that.getIndexByIssue(d.issue)].x;
        });
      this.simulation
        .force("y")
        // .strength(function(d) {
        //   // return d.meanActivist == 1 ? 0.3 : 0.2;
        //   return 0.5;
        // })
        .y(function(d) {
          return that.centers[that.getIndexByIssue(d.issue)].y;
        });
      setTimeout(() => {
        this.simulation.alpha(1).restart();
      }, 1000 * this.managerIndex);
    },
    simulate() {
      const that = this;
      this.simulation = d3
        .forceSimulation(this.nodes)
        // Move the parameters to the store later
        .alpha(1) // Starting point, alpha is the "ticks" unit or counter // default: 1, range: [0,1]
        .alphaDecay(0.08) // Acceleration of the animation // default: 0.0288, range [0,1]
        .alphaMin(0.002) // Stopping point // default: 0.001, range [0,1]
        .alphaTarget(0) // Target! // default: 0, range [0,1]
        .velocityDecay(0.4) // Friction or "mass" // default: 0.4, range [0,1]
        .force(
          "charge",
          d3
            .forceManyBody()
            .strength(-15)
            .theta(0.9)
            .distanceMin(2)
            .distanceMax(800)
        )
        .force(
          "x",
          d3
            .forceX()
            .strength(function(d) {
              // return d.meanActivist > 0.5 ? 0.7 : 0.4;
              return 0.5;
            })
            .x(function(d) {
              return that.centers[that.getIndexByIssue(d.issue)].x;
            })
        )
        .force(
          "y",
          d3
            .forceY()
            .strength(function(d) {
              // return d.meanActivist > 0.5 ? 0.7 : 0.4;
              return 0.5;
            })
            .y(function(d) {
              return that.centers[that.getIndexByIssue(d.issue)].y;
            })
        )
        // .force("center", d3.forceCenter(this.width / 2, this.height / 2))
        // –––
        .force(
          "collision",
          d3
            .forceCollide()
            .radius(this.circle.radius + this.circle.padding)
            .strength(0.7) // find default
            .iterations(1)
        )
        .on("tick", this.ticked);
      console.log(this.managerIndex);
      setTimeout(() => {
        this.simulation.restart();
        this.isGraphInitialized = true;
      }, 1000 * this.managerIndex + 50);

      // console.log(this.simulation);
    }
  }
};
</script>
