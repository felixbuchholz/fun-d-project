<template>
  <!-- // https://codepen.io/koumoul/pen/XMGOdJ -->

  <!-- <button @click="changeForces">Toggle center</button> -->
  <div class="manager-container">
    <h3>{{ managers[managerIndex].name }}</h3>
    <div class="svg-container">
      <svg class="svg-element" :width="width" :height="height">
        <rect :width="width" :height="height" class="svg-background" />
        <g
          v-for="(node, i) in nodes"
          :key="`nodes-${i}`"
          v-tooltip="tooltipOptions(node)"
          class="node-circle-mover"
          :style="
            `transform: translateX(${
              coords[i] ? coords[i].x : getCoordsByIssue(node.issue).x
            }px) translateY(${
              coords[i] ? coords[i].y : getCoordsByIssue(node.issue).y
            }px)`
          "
        >
          <circle
            :r="circle.radius"
            :class="
              `node-circle mean-activist-${
                node.meanActivist > 0.5 ? 'yes' : 'no'
              } ${node.issue}`
            "
          />
        </g>
        <!-- @mouseenter="showTooltip($event, node.company)" -->
        <!-- https://stackoverflow.com/questions/40956671/passing-event-and-argument-to-v-on-in-vue-js -->
        <!-- @mousedown="currentMove = {x: $event.screenX, y: $event.screenY, node: node}" -->
      </svg>
    </div>
  </div>
</template>

<script>
import * as d3 from "d3";
import * as d3array from "d3-array";
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
      circle: { radius: 4, padding: 1.5 },
      nodes: [],
      oldLocal: [],
      newStore: [],
      newLength: [],
      exitIndexes: [],
      simulation: null,
      centered: true,
      isGraphInitialized: false,
      coords: []
    };
  },
  computed: {
    ...mapState({
      managers: state => state.managers.managers,
      // categories: state => state.proposals.categories,
      width: state => state.forceGraph.width,
      height: state => state.forceGraph.height,
      animationIndex: state => state.forceGraph.animationIndex
    }),
    ...mapGetters({
      nodesStore: [`forceGraph/nodesPerYear`],
      centers: [`forceGraph/centers`],
      categories: [`proposals/categories`]
    })
  },
  watch: {
    nodesStore() {
      if (this.managerIndex == 0) {
        this.initGraphOnDataChange();
      }
    },
    animationIndex() {
      // console.log("Animation index changed");
      if (this.managerIndex != 0 && this.animationIndex == this.managerIndex) {
        this.initGraphOnDataChange();
      }
    },
    centers() {
      // console.log("centers have changed");
      // this.updateGraphOnParameterChange();
      // if (this.isGraphInitialized) {
      // }
    }
  },
  created() {},
  mounted() {
    // setTimeout(() => {
    //   this.initGraphOnDataChange();
    // }, 6000);
  },
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
      )}</span></div><div class="information">Year: <span class="bold">${
        node.year
      }</span></div>`;
    },
    ticked() {
      // ticked has no parameter!
      // console.log("tick");
    },
    ended() {
      // ticked has no parameter!
      // console.log("end");
    },
    updateCoordinates() {
      this.coords = [];
      for (let index = 0; index < this.nodes.length; index++) {
        const node = this.nodes[index];
        this.coords.push({
          x: node.x,
          y: node.y
        });
      }
      this.updateAnimationIndex();
    },
    runSimulationTicks() {
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
    },
    findExitNodes() {
      this.oldLocal = this.nodes;
      this.newStore = this.$helpers.getArrayOfObjectsCopy(
        this.nodesStore[this.managerIndex]
      );
      this.newLength = this.newStore.length;

      this.exitIndexes = [];
      for (let i = 0; i < this.oldLocal.length; i++) {
        const proposal = this.oldLocal[i];
        const foundIndex = this.$helpers.findWith2Attrs(
          this.newStore,
          "issue",
          proposal.issue,
          "active",
          proposal.active
        );
        if (foundIndex != -1) {
          this.transferPropsKeepCoords(
            this.oldLocal[i],
            this.newStore[foundIndex]
          );
          this.newStore.splice(foundIndex, 1);
        } else {
          proposal.issue = "exit";
          this.exitIndexes.push(i);
        }
      }
    },
    reassignExitNodes() {
      for (const index of this.exitIndexes) {
        // this.assignCoordsToObj(this.oldLocal[index]);
        if (this.newStore.length > 0) {
          // ? TODO: this assignment is kind of random, can be improved
          this.oldLocal[index] = this.newStore[0];
          this.newStore.splice(0, 1);
        } else {
          this.oldLocal.splice(index, 1);
        }
      }
      this.nodes = [...this.nodes, ...this.newStore];
      this.nodes.splice(this.newLength);
    },
    defineSimulation() {
      const that = this;
      this.simulation = d3
        .forceSimulation(this.nodes)
        // Move the parameters to the store later
        .alpha(0.9) // Starting point, alpha is the "ticks" unit or counter // default: 1, range: [0,1]
        .alphaDecay(0.2) // Acceleration of the animation // default: 0.0288, range [0,1]
        .alphaMin(0.006) // Stopping point // default: 0.001, range [0,1]
        .alphaTarget(0) // Target! // default: 0, range [0,1]
        .velocityDecay(0.4) // Friction or "mass" // default: 0.4, range [0,1]
        .force(
          "charge",
          d3
            .forceManyBody()
            .strength(-14)
            .theta(0.9)
            .distanceMin(1)
            .distanceMax(600)
        )
        .force(
          "x",
          d3
            .forceX()
            .strength(function(d) {
              // return d.meanActivist > 0.5 ? 0.4 : 0.4;
              return 1;
            })
            .x(function(d) {
              if (d.issue == "exit") {
                return that.centers[0].xN;
              }
              const x1 = that.centers[that.getIndexByIssue(d.issue)].x1;
              const x2 = that.centers[that.getIndexByIssue(d.issue)].x2;
              return d.meanActivist > 0.5 ? x2 : x1;
            })
        )
        .force(
          "y",
          d3
            .forceY()
            .strength(function(d) {
              // return d.meanActivist > 0.5 ? 0.8 : 0.5;
              return 1;
            })
            .y(function(d) {
              if (d.issue == "exit") {
                return that.centers[0].yO;
              }
              return that.centers[that.getIndexByIssue(d.issue)].y;
            })
        )
        .force(
          "collision",
          d3
            .forceCollide()
            .radius(this.circle.radius + this.circle.padding)
            .strength(0.9) // find default
            .iterations(2)
        )
        // .on("tick", this.ticked)
        // .on("end", this.ended)
        .stop();
    },
    getCoordsByIssue(issue) {
      const xN = this.centers[this.getIndexByIssue(issue)].xN;
      const y = this.centers[this.getIndexByIssue(issue)].y;
      return { x: xN, y: y };
    },
    assignCoordsToObj(obj) {
      obj.x = this.centers[0].xN;
      obj.y = this.centers[0].y;
    },
    transferCoordinates(receiver, sender) {
      receiver.x = sender.x;
      receiver.y = sender.y;
    },
    transferPropsKeepCoords(receiver, sender) {
      // console.log("transfer");
      const keepCoords = ["x", "y", "vx", "vy"];
      for (const prop in sender) {
        if (!keepCoords.includes(prop)) {
          receiver[prop] = sender[prop];
        }
      }
    },
    getIndexByIssue(issue) {
      const index = this.$helpers.findWithAttr(
        this.categories,
        "issueCode",
        issue
      );
      // console.log(index);
      return index;
    },
    initGraphOnDataChange() {
      this.findExitNodes();

      setTimeout(() => {
        this.reassignExitNodes();
        this.simulate();
      }, 100);
    },
    simulate() {
      this.defineSimulation();
      this.runSimulationTicks();

      let smallPause = 0;
      if (this.nodes < 500) {
        smallPause = 200;
      }
      setTimeout(() => {
        this.updateCoordinates();
      }, smallPause);
    },
    updateAnimationIndex() {
      if (this.managerIndex != this.managers.length - 1) {
        setTimeout(() => {
          this.$store.commit(
            "forceGraph/CHANGE_ANIMATION_INDEX",
            this.managerIndex + 1
          );
        }, 1050);
      } else {
        this.$store.commit("forceGraph/CHANGE_ANIMATION_INDEX", 0);
      }
    }
  }
};
</script>
