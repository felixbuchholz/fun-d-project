<template>
  <!-- // https://codepen.io/koumoul/pen/XMGOdJ -->

  <!-- <button @click="changeForces">Toggle center</button> -->
  <div class="manager-container">
    <h3 class="manager-headline">{{ managers[managerIndex].name }}</h3>
    <div class="svg-container">
      <div class="svg-background"></div>
      <svg class="svg-element" :width="width" :height="height">
        <!-- This is where the responsive grid would happen -->
        <!-- Idea: on mobile the year is shown at the right edge of the manager-container -->
        <!-- but on desktop only at the right edge of the last manager -->
        <!-- <line class="year-line" :x1="0" :x2="width" :y1="0" :y2="0" /> -->

        <!-- <rect :width="width" :height="height" class="svg-background" /> -->
        <g
          v-for="(node, i) in nodes"
          :key="`nodes-${i}`"
          v-tooltip="tooltipOptions(node)"
          class="node-circle-mover"
          :style="
            `transform: translateX(${
              coords[i] ? coords[i].x : getInitialCoords(node).x
            }px) translateY(${
              coords[i] ? coords[i].y : getInitialCoords(node).y
            }px); transition: transform ${animationDuration} ease-in-out;`
          "
          @mouseenter="activateForSameProposals(node)"
          @mouseleave="deactivateForSameProposals(node)"
        >
          <!-- transition: transform ${animationDuration} ease-in-out; -->
          <circle
            :r="circle.radius"
            :class="
              `node-circle mean-activist-${
                node.meanActivist > 0.5 ? 'yes' : 'no'
              } ${node.issue} id-${node.uID} ${getDistinctClass(node)}`
            "
          />
          <!--  -->
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
      pauseBetweenManagers: 600,
      oldNodesLength: 0,
      smallPause: 50,
      nodes: [],
      coords: [],
      oldLocal: [],
      newStore: [],
      newLength: [],
      exitIndexes: [],
      simulation: null,
      centered: true,
      isGraphInitialized: false
    };
  },
  computed: {
    ...mapState({
      managers: state => state.managers.managers,
      // categories: state => state.proposals.categories,
      width: state => state.forceGraph.width,
      height: state => state.forceGraph.height,
      animationIndex: state => state.forceGraph.animationIndex,
      areDistinctOutlinesActive: state =>
        state.proposals.areDistinctOutlinesActive,
      nodeChangeCounter: state => state.progressBar.nodeChangeCounter,
      browsingYears: state => state.progressBar.browsingYears,
      useYearRange: state => state.year.useYearRange
    }),
    ...mapGetters({
      nodesStore: [`forceGraph/nodesPerYear`],
      centers: [`forceGraph/centers`],
      categories: [`proposals/categories`],
      currentYearRangeArray: [`year/currentYearRangeArray`]
    }),
    circle() {
      const padding = this.areDistinctOutlinesActive ? 2 : 1;
      return { radius: 4, padding: padding };
    }
    // animationDuration() {
    //   return (
    //     1.8 * this.nodesStore[this.managerIndex].length +
    //     0.8 * this.oldNodesLength
    //   );
    // }
  },
  watch: {
    nodesStore(change, old) {
      const oldLength = old[this.managerIndex].length;
      const newLength = change[this.managerIndex].length;
      const difference = Math.abs(oldLength - newLength);
      this.pauseBetweenManagers = parseInt(
        240 + 1.5 * difference + 0.38 * (0.65 * oldLength + newLength)
      );
      this.animationDuration = parseInt(0.85 * this.pauseBetweenManagers);

      // console.log("nodes have changed:", this.nodeChangeCounter);
      // console.log(old, change);
      // console.log("pause:", this.pauseBetweenManagers);

      if (this.managerIndex == 0) {
        this.$store.commit(
          "progressBar/UPDATE_ANIMATION_DURATION",
          200 + this.pauseBetweenManagers
        );
        if (this.nodeChangeCounter > 0) {
          this.$helpers.displayOrHideProgressBar("display");
          this.$store.commit("progressBar/CHANGE_PROCESS_COUNTER", 1);
          this.initGraphOnDataChange();
        }
        this.$store.commit("progressBar/INCREMENT_NODE_CHANGE_COUNTER");
      }
    },
    animationIndex() {
      // console.log("Animation index changed");
      if (this.managerIndex != 0 && this.animationIndex == this.managerIndex) {
        this.initGraphOnDataChange();
      }
    },
    areDistinctOutlinesActive(change) {
      this.addOrRemoveOutlines(change);
      // !Optional
      // console.log("Outlines have changed");

      if (this.managerIndex == 0 && this.nodeChangeCounter > 0) {
        this.$helpers.displayOrHideProgressBar("display");
        this.$store.commit("progressBar/CHANGE_PROCESS_COUNTER", 1);
        this.initGraphOnDataChange();
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    getDistinctClass(node) {
      if (this.areDistinctOutlinesActive == true) {
        return node.modeDistinct == 0 ? "" : "distinct";
      } else {
        return "";
      }
    },
    addOrRemoveOutlines(change) {
      setTimeout(() => {
        const circles = this.$el.querySelectorAll(".distinct");
        // console.log(circles);
        if (change) {
          for (const circle of circles) {
            circle.classList.add("distinct-stroke");
            setTimeout(() => {
              circle.classList.add("distinct-stroke-opacity");
            }, 100);
          }
        } else {
          for (const circle of circles) {
            circle.classList.remove("distinct-stroke-opacity");
            setTimeout(() => {
              circle.classList.remove("distinct-stroke");
            }, 350);
          }
        }
      }, 200);
    },
    tooltipOptions(node) {
      return {
        content: this.markupTooltip(node),
        classes: node.issue,
        offset: 3
      };
    },
    markupTooltip(node) {
      return `<div class="resolution">${
        node.desc
      }</div> <div class="information">Company: <span class="company">${voca.titleCase(
        node.company
      )}</span></div><div class="information">Year: <span class="bold">${
        node.year
      }</span></div>`;
    },
    activateForSameProposals(node) {
      const samePropCircles = document.querySelectorAll(`.id-${node.uID}`);
      // console.log(samePropCircles);
      for (const circle of samePropCircles) {
        circle.classList.add("active");
      }
    },
    deactivateForSameProposals(node) {
      const samePropCircles = document.querySelectorAll(`.id-${node.uID}`);
      // console.log(samePropCircles);
      for (const circle of samePropCircles) {
        circle.classList.remove("active");
      }
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
      // TODO: include find same proposal
      this.oldLocal = this.nodes;
      this.newStore = this.$helpers.getArrayOfObjectsCopy(
        this.nodesStore[this.managerIndex]
      );
      this.newLength = this.newStore.length;
      this.exitIndexes = [];
      // ! Only looping once causes an issue here: fix in new branch !
      // if (this.managerIndex == 0) {
      //   console.log(this.$helpers.getArrayOfObjectsCopy(this.oldLocal), this.$helpers.getArrayOfObjectsCopy(this.newStore));
      // }
      // for (let i = 0; i < this.oldLocal.length; i++) {
      //   const proposal = this.oldLocal[i];
      //   const foundID = this.$helpers.findWithAttr(this.newStore, "uID", proposal.uID);
      //   console.log(foundID);
      // }
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
      // This is bad when filtering for the same year, I think
      this.nodes = [...this.nodes, ...this.newStore];
      // this is bad, when filtering – removes the new Selection
      this.nodes.splice(this.newLength);
    },
    defineSimulation() {
      const that = this;
      this.simulation = d3
        .forceSimulation(this.nodes)
        // Move the parameters to the store later
        .alpha(0.9) // Starting point, alpha is the "ticks" unit or counter // default: 1, range: [0,1] // was: 0.9
        .alphaDecay(0.2) // Acceleration of the animation // default: 0.0288, range [0,1] // was: 0.2
        .alphaMin(0.006) // Stopping point // default: 0.001, range [0,1]
        .alphaTarget(0) // Target! // default: 0, range [0,1]
        .velocityDecay(0.45) // Friction or "mass" // default: 0.4, range [0,1] // was: 0.4
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
              return that.getXStrength(d);
            })
            .x(function(d) {
              const x1 = that.centers[that.getCentersIndex(d)].x1;
              const x2 = that.centers[that.getCentersIndex(d)].x2;
              return d.meanActivist > 0.5 ? x2 : x1;
            })
        )
        .force(
          "y",
          d3
            .forceY()
            .strength(function(d) {
              return that.getYStrength(d);
            })
            .y(function(d) {
              return that.centers[that.getCentersIndex(d)].y;
            })
        )
        .force(
          "collision",
          d3
            .forceCollide()
            .radius(this.circle.radius + this.circle.padding)
            .strength(1) // find default // was: 0.9
            .iterations(2)
        )
        // .on("tick", this.ticked)
        // .on("end", this.ended)
        .stop();
    },
    getXStrength(node) {
      if (!this.useYearRange) {
        return 1;
      } else {
        return 0.3;
      }
    },
    getYStrength(node) {
      if (!this.useYearRange) {
        return 1;
      } else {
        return 1.5;
      }
    },
    getXYStrengthOld(d) {
      if (this.areDistinctOutlinesActive) {
        return d.modeDistinct > 0.5 ? 1.3 : 0.9;
      } else {
        return 1;
      }
    },
    getInitialCoords(node) {
      const xN = this.centers[this.getCentersIndex(node)].xN;
      const y = this.centers[this.getCentersIndex(node)].y;
      return { x: xN, y: y };
    },
    assignCoordsToObj(obj) {
      obj.x = this.centers[0].xN;
      obj.y = this.centers[0].y;
    },
    transferCoordinates(receiver, sender) {
      receiver.x = sender.x;
      // receiver.x = sender.vx;
      receiver.y = sender.y;
      // receiver.y = sender.vy;
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
    getCentersIndex(node) {
      //──── Structure ────────────────────────────────────────────────────────────────────────────
      // There are two cases
      // 1. useYearRange is active (true): we want vertical position by year
      // 2. useYearRange is not active (false): we want vertical position by issue category
      if (this.useYearRange) {
        // Case 1
        const indexOfTheNodeYear = this.currentYearRangeArray.indexOf(
          node.year
        );
        return indexOfTheNodeYear;
      } else if (!this.useYearRange) {
        // Case 2
        const indexOfTheNodeIssue = this.$helpers.findWithAttr(
          this.categories,
          "issueCode",
          node.issue
        );
        // console.log(index);
        return indexOfTheNodeIssue;
      } else {
        // This is just in case something goes wrong
        // we’ll throw an erroer
        throw new Error("Unexcpected value of useYearRange in ForceGraph.vue");
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
      // console.log("graph function called");
      this.startProgressBar();

      this.reassignNodes();

      setTimeout(() => {
        this.simulate();
      }, this.smallPause);
    },
    reassignNodes() {
      //──── Phase A ───────────────────────────────────────────────────────────────────────────
      // Intent: Set up an array that allows to test wether all new elements have been included

      // Reassign the old nodes to a new variable name, mainly for convenience / readability
      this.oldLocal = this.nodes;

      // Get the new Array from store, copy it to avoid changes of the store
      this.newStore = this.$helpers.getArrayOfObjectsCopy(
        this.nodesStore[this.managerIndex]
      );
      // Get the length of the store array copy, used in creating the empty array
      // and checking if old nodes can be inside the array
      this.newLength = this.newStore.length;

      // Create an array filled with undefined values with the length of the new store array copy
      // Throughout this function the undefined values will be swapped out with newStore elements
      // until the newStore array is empty and all values of the fillUpArray are defined
      let fillUpArray = [...Array(this.newLength)];

      //──── Phase B ────────────────────────────────────────────────────────────────────────────
      // Intent: gradually “define” elements by matching new and old nodes in the fillUpArray
      // with decreasing specificity
      let matchedCandidates = []; // used to temp. store the matches with indexes > newLength
      // will be used after all steps to fill up empty spots
      // Step 1
      // Intent: Find matches with the same uID in case of filtering within the same year
      // In the first step we will loop through all elements of the new store array and match by uID

      const matchOldAndNew = matchingAttrArray => {
        let matchedIndexesToRemove = []; // used to store the matched nodes that will be removed after the loop
        for (let i = 0; i < this.newStore.length; i++) {
          const newProposal = this.newStore[i];
          // translate the matchingAttrArray to an attrValArray for the helper function
          let attrsValsArray = [];
          for (const element of matchingAttrArray) {
            const obj = { attr: element, val: this.newStore[i][element] };
            attrsValsArray.push(obj);
          }
          // console.log(this.oldLocal.length);
          const foundIndex = this.$helpers.findWithEveryAttr(
            this.oldLocal,
            attrsValsArray
          );

          // We can expect 3 cases here:
          // 1. -1 -> no old node matched
          // we do nothing: node remains in newStore for next step
          // 2. 0 or positive value < this.newLength
          // 3. 0 or positive value > this.newLength
          // 2. and 3. means we matched: we will store the node index in an array
          // to remove it from the new store after this loop is finished
          // 2. is perfect -> we will place the new node with the coordinates of the old
          // at the old index spot in the fillUpArray
          // 3. is kind of bad, we can copy the old coordinates,
          // but we can’t use the index to position the node in the fillUpArray,
          // we would risk overwriting it later
          // that’s why we need the matchedCandidates array as a temporary storage
          // once all the 2. cases are solved for all steps
          // we can use this fill empty spots

          const notMatched = foundIndex == -1;
          const matched = foundIndex >= 0;
          const matchedAndIndexFitsInNewArray =
            matched && foundIndex < this.newLength;
          const matchedButIndexOutsideOfNewArray =
            matched && foundIndex >= this.newLength;

          if (notMatched) {
            // Nothing happens
          } else if (matchedAndIndexFitsInNewArray) {
            // new node gets coordinates of old node
            this.transferCoordinates(newProposal, this.oldLocal[foundIndex]);
            // new node gets placed in the fillUpArray
            fillUpArray[foundIndex] = newProposal;
            // make sure the same spot is not matched twice
            this.oldLocal[foundIndex] = undefined;
            // new node gets into the index array to be removed from the newStoreArray after the loop
            matchedIndexesToRemove.push(i);
          } else if (matchedButIndexOutsideOfNewArray) {
            // new node gets coordinates of old node
            this.transferCoordinates(newProposal, this.oldLocal[foundIndex]);
            // new node gets placed in the temporary storage: matchedCandidates
            // smth else has to happen later
            matchedCandidates.push(newProposal);
            // new node gets removed from the newStoreArray (later)
            matchedIndexesToRemove.push(i);
          } else {
            // console.log("foundIndex: ", foundIndex);
            // console.log("newLength: ", this.newLength);
            // console.log("new", newProposal);
            // console.log("old", this.oldLocal[foundIndex]);

            throw new Error("This should not have happened");
          }
        }

        for (const index of matchedIndexesToRemove) {
          this.newStore[index] = undefined;
        }
        this.newStore = this.newStore.filter(x => x != undefined);
      };
      //──── Phase C ───────────────────────────────────────────────────────────────────────────
      matchOldAndNew(["uID"]);
      matchOldAndNew(["issue", "active", "company"]);
      matchOldAndNew(["issue", "active"]);
      matchOldAndNew(["issue"]);
      //──── Phase D ───────────────────────────────────────────────────────────────────────────
      // fill up the empty spots elements from matched Candidates and newStore

      const fillUndefinedWithElementsOfArray = (toBeFilled, filler) => {
        for (let index = 0; index < toBeFilled.length; index++) {
          if (typeof toBeFilled[index] === "undefined") {
            toBeFilled[index] = filler[0];
            filler.splice(0, 1);
          }
        }
      };

      // console.log("matched candidates: ", matchedCandidates.length);
      fillUndefinedWithElementsOfArray(fillUpArray, matchedCandidates);
      // console.log("remaining new nodes: ", this.newStore.length);
      fillUndefinedWithElementsOfArray(fillUpArray, this.newStore);

      //──── Phase E ───────────────────────────────────────────────────────────────────────────
      // Tests
      if (!this.newStore.length == 0) {
        throw new Error("newStore is not empty");
      }
      if (!fillUpArray.every(x => x != undefined)) {
        // console.log(fillUpArray);
        throw new Error("fillUpArray Elements are undefined");
      }
      //──── Phase F ───────────────────────────────────────────────────────────────────────────
      // Reassign the nodes
      this.nodes = fillUpArray;
    },
    simulate() {
      this.defineSimulation();
      this.runSimulationTicks();

      let smallPause = 0;
      if (this.nodes < 500) {
        smallPause = this.smallPause * 2;
      }
      setTimeout(() => {
        this.updateCoordinates();
      }, smallPause);
    },
    startProgressBar() {
      const managerPositionInPercent =
        (100 / this.managers.length) * (this.managerIndex + 1);
      setTimeout(() => {
        this.$store.commit(
          "progressBar/CHANGE_PROGRESS",
          managerPositionInPercent
        );
      }, 150);
    },
    endProgressBar() {
      if (this.managerIndex == this.managers.length - 1) {
        setTimeout(() => {
          if (!this.browsingYears) {
            this.$helpers.displayOrHideProgressBar("hide");
          }
        }, 1.9 * this.pauseBetweenManagers);
        setTimeout(() => {
          this.$store.commit("progressBar/CHANGE_PROGRESS", 0);
        }, 1.9 * this.pauseBetweenManagers + 5);
      }
    },
    updateAnimationIndex() {
      this.endProgressBar();
      if (this.managerIndex != this.managers.length - 1) {
        setTimeout(() => {
          this.$store.commit(
            "forceGraph/CHANGE_ANIMATION_INDEX",
            this.managerIndex + 1
          );
        }, this.pauseBetweenManagers);
      } else {
        this.$store.commit("forceGraph/CHANGE_ANIMATION_INDEX", 0);

        setTimeout(() => {
          this.$store.commit("progressBar/UPDATE_ANIMATION_DURATION", 200);
          this.$store.commit("progressBar/CHANGE_PROCESS_COUNTER", 0);
          if (!this.browsingYears) {
            this.$store.commit("progressBar/CLEAR_STEP_ARRAY");
          }
        }, this.pauseBetweenManagers);
      }
    }
  }
};
</script>
