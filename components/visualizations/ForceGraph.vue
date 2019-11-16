<template>
  <!-- // https://codepen.io/koumoul/pen/XMGOdJ -->
  <div>
    <h3>{{ managers[managerIndex].name }}</h3>
    <!-- <button @click="changeForces">Toggle center</button> -->
    <div class="svg-container">
      <svg class="svg-element" :width="width" :height="height">
        <rect :width="width" :height="height" class="svg-background" />
        <!-- :cx="coords[i] ? coords[i].x : 0"
          :cy="coords[i] ? coords[i].y : 0" -->
        <circle
          v-for="(node, i) in nodes"
          :key="`nodes-${i}`"
          v-tooltip="tooltipOptions(node)"
          :r="circle.radius"
          :class="
            `mean-activist-${node.meanActivist > 0.5 ? 'yes' : 'no'} ${
              node.issue
            }`
          "
          :style="
            `transform: translateX(${
              coords[i] ? coords[i].x : 0
            }px) translateY(${coords[i] ? coords[i].y : 0}px)`
          "
        />
        <!-- @mouseenter="showTooltip($event, node.company)" -->
        <!-- https://stackoverflow.com/questions/40956671/passing-event-and-argument-to-v-on-in-vue-js -->
        <!-- @mousedown="currentMove = {x: $event.screenX, y: $event.screenY, node: node}" -->
      </svg>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import voca from "voca";
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
      isGraphInitialized: false,
      coords: {}
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
    })
    // coords() {
    //   return this.nodes.map(node => {
    //     return {
    //       // x: node.x,
    //       // y: node.y
    //       x: 10,
    //       y: 10
    //     };
    //   });
    // }
  },
  watch: {
    nodesStore() {
      // console.log("nodesStore has changed");
      this.initGraphOnDataChange();
    },
    centers() {
      console.log("centers have changed");
      this.updateGraphOnParameterChange();
      // if (this.isGraphInitialized) {
      // }
    }
  },
  created() {
    // console.log(d3);
    this.initGraphOnDataChange();
  },
  mounted() {},
  methods: {
    tooltipOptions(node) {
      return {
        content: this.markupTooltip(node),
        classes: node.issue
      };
    },
    markupTooltip(node) {
      return `<div class="resolution">${
        node.resolution
      }</div> <div class="information">Company: <span class="company">${voca.titleCase(
        node.company
      )}</span></div>`;
    },
    ticked() {
      // ticked has no parameter!
      console.log("tick");
    },
    ended() {
      // ticked has no parameter!
      console.log("end");
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
      console.log("the old function happened");
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
        .alphaDecay(0.1) // Acceleration of the animation // default: 0.0288, range [0,1]
        .alphaMin(0.004) // Stopping point // default: 0.001, range [0,1]
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
        .on("tick", this.ticked)
        .on("end", this.ended)
        .stop();
      // console.log(this.managerIndex);
      // this.simulation.stop().start();
      setTimeout(() => {
        for (
          var i = 0,
            n = Math.ceil(
              Math.log(this.simulation.alphaMin()) /
                Math.log(1 - this.simulation.alphaDecay())
            );
          i < n;
          ++i
        ) {
          this.simulation.tick();
        }
        console.log("finished");
        this.coords = this.nodes.map(node => {
          return {
            x: node.x,
            y: node.y
            // x: 20,
            // y: 20
          };
        });
      }, 500);
      // setTimeout(() => {
      //   this.simulation.restart();
      //   for (var i = 0; i < 100; ++i) this.simulation.tick();
      //   this.isGraphInitialized = true;
      // }, 1000 * this.managerIndex + 50);

      // console.log(this.simulation);
    }
  }
};
</script>
