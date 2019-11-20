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
      exitNodex: [],
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
      // d3.group(data, d => d.name);
      // Array.from(d3.group(data, d => d.name));
      let oldLocal = this.nodes;
      let newStore = this.$helpers.getArrayOfObjectsCopy(
        this.nodesStore[this.managerIndex]
      );
      console.log(oldLocal.length, newStore.length);

      let groupedOldLocal = this.group(oldLocal);
      let groupedNewStore = this.group(newStore);

      let flatOldLocal = this.flattenArray(groupedOldLocal);
      let flatNewStore = this.flattenArray(groupedNewStore);

      // if (oldLocal.length == 0) {
      //   this.nodes = newStore;
      // } else if (oldLocal.length < newStore.length) {
      // if (oldLocal.length < newStore.length) {
      //   // } else {
      //   let groupedNewStore = this.group(newStore);
      //   let groupedOldLocal = this.group(oldLocal);

      //   // console.log(groupedOldLocal);
      //   for (
      //     let issueIndex = 0;
      //     issueIndex < groupedOldLocal.length;
      //     issueIndex++
      //   ) {
      //     const issue = groupedOldLocal[issueIndex][1];
      //     // let issueNew = groupedNewStore[issueIndex][1];

      //     // console.log(issue);
      //     for (
      //       let activismIndex = 0;
      //       activismIndex < issue.length;
      //       activismIndex++
      //     ) {
      //       const activism = issue[activismIndex][1];
      //       // let activismNew = issueNew[activismIndex][1];
      //       // console.log(activism);
      //       for (let propIndex = 0; propIndex < activism.length; propIndex++) {
      //         // let propOld = activism[propIndex];
      //         console.log("+++");
      //         // console.log("old", propOld);
      //         // const propNew = activismNew[propIndex];
      //         // console.log("new", propNew);
      //         // console.log(groupedNewStore[issueIndex]);
      //         // this.transferPropsKeepCoords(
      //         //   groupedOldLocal[issueIndex][1][activismIndex][1][propIndex],
      //         //   groupedNewStore[issueIndex][1][activismIndex][1][propIndex]
      //         // );
      //         if (groupedNewStore[issueIndex]) {
      //           // console.log(groupedOldLocal[issueIndex][0]);
      //           // console.log(groupedNewStore[issueIndex][0]);
      //           // console.log(groupedNewStore[issueIndex][1][activismIndex]);
      //           if (groupedNewStore[issueIndex][1][activismIndex]) {
      //             // console.log(
      //             //   groupedNewStore[issueIndex][1][activismIndex][1][propIndex]
      //             // );
      //             // console.log(groupedOldLocal[issueIndex][1][activismIndex]);
      //             // console.log(groupedNewStore[issueIndex][1][activismIndex]);
      //             // console.log(groupedNewStore[issueIndex][0]);
      //             if (
      //               groupedNewStore[issueIndex][1][activismIndex][1][propIndex]
      //             ) {
      //               if (issueIndex == 0) {
      //                 console.log(
      //                   groupedOldLocal[issueIndex][1][activismIndex][1][
      //                     propIndex
      //                   ],
      //                   groupedNewStore[issueIndex][1][activismIndex][1][
      //                     propIndex
      //                   ]
      //                 );
      //               }
      //               this.transferPropsKeepCoords(
      //                 groupedOldLocal[issueIndex][1][activismIndex][1][
      //                   propIndex
      //                 ],
      //                 groupedNewStore[issueIndex][1][activismIndex][1][
      //                   propIndex
      //                 ]
      //               );

      //               groupedNewStore[issueIndex][1][activismIndex][1].splice(
      //                 propIndex,
      //                 1
      //               );
      //             } else {
      //               console.log("innermost");
      //               groupedOldLocal[issueIndex][1][activismIndex][1][
      //                 propIndex
      //               ].issue = "test";
      //             }
      //           } else {
      //             console.log("in between");
      //             groupedOldLocal[issueIndex][1][activismIndex][1][
      //               propIndex
      //             ].issue = "test";
      //           }
      //         } else {
      //           console.log("outermost");
      //           groupedOldLocal[issueIndex][1][activismIndex][1][
      //             propIndex
      //           ].issue = "test";
      //         }
      //         console.log("nothing");

      //         console.log("---");
      //       }
      //     }
      //   }
      //   let flatOldLocal = this.flattenArray(groupedOldLocal);
      //   let flatNewStore = this.flattenArray(groupedNewStore);

      // console.log(flatOldLocal);
      // console.log(flatNewStore);
      // this.nodes = [...oldLocal, ...newStore];
      // console.log(this.nodes);

      // for (let i = oldLocal.length; i < newStore.length; i++) {
      //   this.coords[i] = {
      //     x: this.centers[this.getIndexByIssue(this.nodes[i].issue)].x0,
      //     y: this.centers[this.getIndexByIssue(this.nodes[i].issue)].y
      //   };
      // }

      // else end
      // }
      this.nodes = [...flatOldLocal, ...flatNewStore];
      console.log(this.nodes);

      // const oldLocalLength = this.nodes.length;
      // const newStoreLength = this.nodesStore[this.managerIndex].length;
      // console.log(newStoreLength, oldLocalLength);
      // this.enterNodes = [];
      // for (let i = oldLocalLength; i < newStoreLength; i++) {
      //   this.enterNodes.push(this.nodesStore[this.managerIndex][i]);
      // }
      // console.log(this.enterNodes);
      // this.nodes = this.$helpers.getArrayOfObjectsCopy(
      //   this.nodesStore[this.managerIndex]
      // );
      // for (let i = oldLocalLength; i < newStoreLength; i++) {
      //   this.coords[i] = {
      //     x: this.centers[this.getIndexByIssue(this.nodes[i].issue)].x0,
      //     y: this.centers[this.getIndexByIssue(this.nodes[i].issue)].y
      //   };
      // }

      setTimeout(() => {
        this.simulate();
      }, 2000 * this.managerIndex + 2000);

      // let issuesCounters = [...Array(this.categories.length)].map(() => 0);
      // for (let i = oldLocalLength; i < newStoreLength; i++) {
      //   let issueCounter =
      //     issuesCounters[this.getIndexByIssue(this.nodes[i].issue)];
      //   this.coords[i] = {
      //     x: this.centers[this.getIndexByIssue(this.nodes[i].issue)].x0,
      //     y:
      //       this.centers[this.getIndexByIssue(this.nodes[i].issue)].y0 +
      //       (this.circle.radius * 2 + this.circle.padding) * issueCounter
      //   };
      //   issuesCounters[this.getIndexByIssue(this.nodes[i].issue)]++;
      // }
      // console.log(this.nodes.length);
      // this.simulate();
      // setTimeout(() => {
      //   this.simulate();
      // }, 2000 * this.managerIndex + 50);
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
