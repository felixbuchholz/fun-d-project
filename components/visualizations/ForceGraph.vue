<template>
  <!-- // https://codepen.io/koumoul/pen/XMGOdJ -->
  <div>
    <button @click="changeForces">Toggle center</button>
    <div class="svg-container">
      <svg class="svg-element" :width="width" :height="height">
        <rect class="svg-background" />
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

import { mapGetters } from "vuex";
import * as forceManyBodyReuse from "d3-force-reuse";

d3.forceManyBodyReuse = forceManyBodyReuse;

// import br from "~/static/data/BR_reduced_18.csv";

export default {
  props: {
    fundCode: {
      type: String,
      default: "br"
    }
  },
  data() {
    return {
      width: 1200,
      height: 700,
      circle: { radius: 5, padding: 0 },
      categories: [
        { name: "Non-ESG", issueCode: "no-esg" },
        { name: "Environmental", issueCode: "env" },
        { name: "Social", issueCode: "soc" },
        { name: "Good Governance", issueCode: "gg" },
        { name: "Profitability", issueCode: "profit" }
      ],
      nodes: [],
      // nodes: (function() {
      //   const yearFilter = br.filter(x => x.year == 2009);
      //   const coordMap = yearFilter.map(x => {
      //     let newObject = x;
      //     newObject.x = Math.random() * 1200;
      //     newObject.y = Math.random() * 700;
      //     return newObject;
      //   });
      //   return coordMap;
      // })(),
      // nodes: d3.range(500).map(function() {
      //   return {
      //     x: Math.random() * 1200,
      //     y: Math.random() * 700,
      //     issue: Math.floor(Math.random() * 4),
      //     meanActivist: Math.min(
      //       Math.floor(Math.random() * 2),
      //       Math.floor(Math.random() * 2)
      //     )
      //   };
      // }),
      simulation: null,
      centered: true
    };
  },
  computed: {
    ...mapGetters({
      nodesStore: [`proposals/brCurrentYear`]
    }),
    coords() {
      return this.nodes.map(node => {
        return {
          x: node.x,
          y: node.y
        };
      });
    },
    centers() {
      // console.log(this.width);
      return [
        { x: this.width * 0.4, y: this.height * 0.4 },
        { x: this.width * 0.6, y: this.height * 0.4 },
        { x: this.width * 0.4, y: this.height * 0.6 },
        { x: this.width * 0.6, y: this.height * 0.6 },
        { x: this.width * 0.5, y: this.height * 0.5 }
      ];
    }
  },
  watch: {
    nodesStore() {
      console.log("nodesStore has changed");
      this.updateGraph();
    }
    // nodesStore: {
    //   deep: true,
    //   handler(change) {
    //     // console.log(change);
    //     const newShares = this.$helpers.getArrayOfObjectsCopy(change);
    //     this.$store.commit("diversification/CHANGE_SHARES", newShares);
    //   }
    // }
  },
  created() {
    this.updateGraph();
  },
  methods: {
    updateGraph() {
      this.nodes = this.$helpers.getArrayOfObjectsCopy(this.nodesStore);
      // console.log(this.nodes.length);
      setTimeout(() => {
        this.simulate();
      }, 500);
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
    changeForces() {
      const that = this;
      if (this.centered) {
        this.centered = false;
        this.simulation
          .force("x")
          .strength(function(d) {
            // return d.meanActivist == 1 ? 0.3 : 0.2;
            return 0.4;
          })
          .x(function(d) {
            return that.centers[that.getIndexByIssue(d.issue)].x;
          });
        this.simulation
          .force("y")
          .strength(function(d) {
            // return d.meanActivist == 1 ? 0.3 : 0.2;
            return 0.4;
          })
          .y(function(d) {
            return that.centers[that.getIndexByIssue(d.issue)].y;
          });
      } else {
        this.centered = true;
        this.simulation
          .force("x")
          .strength(0.2)
          .x(this.width / 2);
        this.simulation
          .force("y")
          .strength(0.2)
          .y(this.height / 2);
      }
      this.simulation.alpha(1).restart();
    },
    simulate() {
      this.simulation = d3
        .forceSimulation(this.nodes)
        .force("charge", d3.forceManyBodyReuse().strength(-20))
        // .force("center", d3.forceCenter(this.width / 2, this.height / 2))
        .force(
          "x",
          d3
            .forceX()
            .strength(0.1)
            .x(this.width / 2)
        )
        .force(
          "y",
          d3
            .forceY()
            .strength(0.1)
            .y(this.height / 2)
        )
        .force(
          "collision",
          d3.forceCollide().radius(this.circle.radius + this.circle.padding)
        );
      // console.log(this.simulation);
      setTimeout(() => {
        this.simulation.restart();
      }, 750);
    }
  }
};
</script>
