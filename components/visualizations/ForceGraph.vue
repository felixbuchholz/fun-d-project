<template>
  <!-- // https://codepen.io/koumoul/pen/XMGOdJ -->
  <div>
    <h3>{{ managers[managerIndex].name }}</h3>
    <!-- <button @click="changeForces">Toggle center</button> -->
    <div class="svg-container">
      <svg class="svg-element" :width="width" :height="height">
        <rect :width="width" :height="height" class="svg-background" />
        <!-- :cx="coords[i] ? coords[i].x : 0"
        :cy="coords[i] ? coords[i].y : 0"-->
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
              coords[i] ? coords[i].x : 10
            }px) translateY(${coords[i] ? coords[i].y : 10}px)`
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
      circle: { radius: 4, padding: 1 },
      enterNodes: [],
      nodes: [],
      exitNodes: [],
      simulation: null,
      centered: true,
      isGraphInitialized: false,
      coords: []
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
  },
  watch: {
    nodesStore() {
      this.initGraphOnDataChange();
    },
    centers() {
      // console.log("centers have changed");
      // this.updateGraphOnParameterChange();
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
      )}</span></div><div class="information">Year: <span class="bold">${
        node.year
      }</span></div>`;
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
      let oldLocal = this.nodes;
      let newStore = this.$helpers.getArrayOfObjectsCopy(
        this.nodesStore[this.managerIndex]
      );
      const oldLength = oldLocal.length;
      const newLength = newStore.length;

      console.log(oldLocal);
      console.log(newStore);
      console.log(oldLocal.length, newStore.length);

      let exitIndexes = [];
      this.exitNodes = [];
      for (let i = 0; i < oldLocal.length; i++) {
        const proposal = oldLocal[i];
        const foundIndex = this.$helpers.findWith2Attrs(
          newStore,
          "issue",
          proposal.issue,
          "active",
          proposal.active
        );
        if (foundIndex != -1) {
          this.transferPropsKeepCoords(oldLocal[i], newStore[foundIndex]);

          newStore.splice(foundIndex, 1);
        } else {
          // console.log(i);
          proposal.issue = "exit";
          this.exitNodes.push(proposal);
          exitIndexes.push(i);
          // oldLocal.splice(i, 1);
        }
      }

      setTimeout(() => {
        this.nodes = oldLocal;
        this.simulate();
        setTimeout(() => {
          for (const index of exitIndexes) {
            if (newStore.length > 0) {
              oldLocal[index] = newStore[0];
              newStore.splice(0, 1);
            } else {
              oldLocal.splice(index, 1);
            }
          }
          this.nodes = [...this.nodes, ...newStore];
          console.log(oldLength, newLength);
          this.nodes.splice(newLength);
          console.log("combined", this.nodes.length);
          this.simulate();
        }, 1500);
      }, 1500);

      // for (let index = oldLocal.length; index < this.nodes.length; index++) {
      //   this.nodes[index].x = 10;
      //   this.nodes[index].y = 10;
      // }
      // console.log("combined", this.nodes);

      // setTimeout(() => {
      //   this.simulate();
      // }, 2000 * this.managerIndex + 400);
    },
    group(array) {
      return d3array.groups(array, d => d.issue, d => d.active);
    },
    flattenArray(array) {
      let newArray = [];
      for (let issueIndex = 0; issueIndex < array.length; issueIndex++) {
        const issue = array[issueIndex][1];
        for (
          let activismIndex = 0;
          activismIndex < issue.length;
          activismIndex++
        ) {
          const activism = issue[activismIndex][1];
          // console.log(activism);
          for (let propIndex = 0; propIndex < activism.length; propIndex++) {
            let prop = activism[propIndex];
            newArray.push(prop);
          }
        }
      }
      return newArray;
    },
    transferCoordinates(receiver, sender) {
      receiver.x = sender.x;
      receiver.y = sender.y;
    },
    transferPropsKeepCoords(receiver, sender) {
      console.log("transfer");
      const keepCoords = ["x", "y", "vx", "vy"];
      for (const prop in sender) {
        if (!keepCoords.includes(prop)) {
          receiver[prop] = sender[prop];
        }
      }
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

    // updateGraphOnParameterChange() {
    //   console.log("the old function happened");
    //   const that = this;
    //   this.simulation
    //     .force("x")
    //     // .strength(function(d) {
    //     //   // return d.meanActivist == 1 ? 0.3 : 0.2;
    //     //   return 0.5;
    //     // })
    //     .x(function(d) {
    //       return that.centers[that.getIndexByIssue(d.issue)].x;
    //     });
    //   this.simulation
    //     .force("y")
    //     // .strength(function(d) {
    //     //   // return d.meanActivist == 1 ? 0.3 : 0.2;
    //     //   return 0.5;
    //     // })
    //     .y(function(d) {
    //       return that.centers[that.getIndexByIssue(d.issue)].y;
    //     });
    //   setTimeout(() => {
    //     this.simulation.alpha(1).restart();
    //   }, 1200 * this.managerIndex);
    // },
    simulate() {
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
              // return d.meanActivist > 0.5 ? 0.4 : 0.4;
              return 0.5;
            })
            .x(function(d) {
              if (d.issue == "exit") {
                return 1;
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
              return 0.5;
            })
            .y(function(d) {
              if (d.issue == "exit") {
                return 1;
              }
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
            .strength(0.9) // find default
            .iterations(10)
        )
        // .on("tick", this.ticked)
        // .on("end", this.ended)
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
        this.coords = [];
        for (let index = 0; index < this.nodes.length; index++) {
          const node = this.nodes[index];
          this.coords.push({
            x: node.x,
            y: node.y
          });
        }
        // this.coords = this.nodes.map(node => {
        //   return {
        //     x: node.x,
        //     y: node.y
        //     // x: 20,
        //     // y: 20
        //   };
        // });
      }, 100);
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
