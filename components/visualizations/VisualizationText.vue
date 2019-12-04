<template>
  <div id="scrolly1" class="scrolly-telling-text">
    <!-- TODO: transition not working (classes work) -->
    <transition name="fade">
      <div v-if="processCounter > 2" class="scroll-popover-modal">
        <div class="scroll-popover-container">
          <fa icon="spinner" class="scroll-popover-icon rotating" />
          <div class="scroll-popover-message">Please wait until animation is finished&nbsp;…</div>
        </div>
      </div>
    </transition>
    <div ref="indicator-mover-1" class="scrolly-indicator-mover">
      <div ref="indicator-1" class="scrolly-indicator feedback feedback--effect-ivana small">
        <fa icon="long-arrow-alt-right" class />
      </div>
    </div>

    <Scrollama :offset="0.35" @step-enter="stepEnterHandler">
      <div id="scroll_0" :class="`margin-scrollama-text ${getLoadingState(0)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <h4 class="scrollyTitle">Where activists meet the passive investment giants</h4>
        <p>
          First look at how these three asset management firms compare in terms
          of siding with or against management.
          <br />We zoom in on proposals brought by shareholders, and categorize
          those by topics. We focus on three main issues:
        </p>
        <ul>
          <li class="env_li">
            <span>environmental</span>
          </li>
          <li class="soc_li">
            <span>social</span>
          </li>
          <li class="gov_li">
            <span>governance</span>
          </li>
        </ul>
        <p>
          Funds from one manager may vote differently. This visual takes the
          most common vote for each manager.
        </p>
      </div>

      <div id="scroll_1" :class="`margin-scrollama-text ${getLoadingState(1)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          <span class="env_li" style="vertical-align: -1px">&#8226;</span>
          <span style="font-weight: 800;">Environmental</span> topics brought by
          shareholders include requests for more disclosure regarding a
          company’s climate change risks; environmental impact and
          sustainability reports (such as methane emissions reporting); as well
          as demands for recyclable packaging at food and beverage companies.
          <br />
          <br />These environmental shareholder proposals are the ones that the
          company and activist shareholders could not agree upon. There are
          always proposals that were submitted but withdrawn, after the company
          satisfies activists with a promise to take action on that issue.
        </p>
      </div>

      <div id="scroll_2" :class="`margin-scrollama-text ${getLoadingState(2)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          Topics in the
          <span class="soc_li" style="vertical-align: -1px">&#8226;</span>
          <span style="font-weight: 800;">social</span> category are often calls
          for companies to be more transparent about political contributions;
          their lobbying; human rights policies.
          <br />Social shareholder
          proposals also include employment issues such as employee diversity,
          pay-gaps and greater support for workers’ rights (for example minimum
          wage reform).
        </p>
      </div>

      <div id="scroll_3" :class="`margin-scrollama-text ${getLoadingState(3)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          Proposals targeting
          <span class="gov_li" style="vertical-align: -2px">&#8226;</span>
          governance changes relate to the leadership of companies. This can be
          issues such as boardroom diversity, separating a company’s chairman
          and CEO roles (to de-concentrate corporate leadership), and proposals
          to empower minority shareholder blocks.
        </p>
        <p>
          Darker
          <span class="gov_li" style="vertical-align: -2px">&#8226;</span>:
          manager voted against management for that agenda item across most of
          its funds.
          <br />Lighter
          <span class="gov_li_light" style="vertical-align: -2px">&#8226;</span>
          : manager supported the company's management.
        </p>
      </div>

      <div id="scroll_4" :class="`margin-scrollama-text ${getLoadingState(4)} last-category`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          We noticed a few shareholder proposals asking the target company to
          hire an advisor to maximize shareholder value. Most of this comes from
          "activist hedge funds" that buy a certain amount of stock in a
          company, to be able to enforce key changes at target companies. The
          goal of shareholder value maximization is not without controversy. It
          can conflict with other stakeholders’ interests, like when a
          reorganization seeks to dispose of many employees, with the purpose of
          realizing a short-term gain rather than improving the company.
          <br />
          <br />Sometimes however hedge funds are useful for their entensive
          research into structural improvement opportunities in companies that
          are ineffectively managed. Board members can be lazy, in need of a
          shakeup. Activist shareholder proposals can be justified or not - it
          depends. For other shareholders, including asset managers, this
          assessment requires an active approach to proxy voting.
        </p>
      </div>

      <div id="scroll_5" :class="`margin-scrollama-text ${getLoadingState(5)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          In this step we can just experiment with things:
          <br />One option for the final version: “click” through a couple of
          years
          <br />Right now: Narrowing down to the social category again
        </p>
      </div>

      <div id="scroll_6" :class="`margin-scrollama-text ${getLoadingState(6)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          This is where we start talking about gun control. (filtering by column
          and keyword, showing all years, next step will be arranging vertically
          on the grid)
        </p>
      </div>

      <div id="scroll_7" :class="`margin-scrollama-text ${getLoadingState(7)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          This is filtered by proposals that match company column includes
          "amazon" for the years 2010 – 2016.
        </p>
      </div>

      <div class="margin-scrollama-text">This is where the distinct outlines are activated</div>
      <div class="margin-scrollama-text">This is just for spacing</div>
      <div class="margin-scrollama-text">This is just for spacing</div>
    </Scrollama>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import { mapState } from "vuex";

export default {
  data: function() {
    return {
      lastStep: "",
      lastIndex: 0
    };
  },
  computed: {
    ...mapState({
      processCounter: state => state.progressBar.processCounter,
      stepArray: state => state.progressBar.stepArray,
      year: state => state.year.year,
      yearRange: state => state.year.yearRange
    })
  },
  methods: {
    changeYear(val) {
      this.$store.commit("year/CHANGE_YEAR", val);
    },
    browseThroughYears(endYear) {
      if (this.year < endYear) {
        this.$store.commit("progressBar/UPDATE_BROWSING_YEARS", true);
        const that = this;
        let timer = setInterval(() => {
          // console.log("interval");
          if (this.processCounter == 0) {
            // console.log("processCounter == 0");
            that.changeYear(1);
          }
          if (this.year == endYear) {
            this.$store.commit("progressBar/UPDATE_BROWSING_YEARS", false);
            clearInterval(timer);
          }
        }, 150);
      } else {
        // TODO: what to do if current year is later than endYear?
      }
    },
    setActiveCats(array) {
      setTimeout(() => {
        this.$store.commit("proposals/SET_ACTIVE_CATEGORIES", array);
      }, 100);
    },
    getLoadingState(num) {
      if (this.stepArray.includes(num)) {
        return "loading";
      } else {
        return "";
      }
    },
    displayOrHideGrid(option = "display") {
      // Only use the grid in the same parent container,
      // in case we at some point wil have multiple ones of these
      const graphGrid = this.$el.parentElement.querySelector(".grid");
      if (option == "display") {
        graphGrid.classList.remove("zero-opacity");
      } else {
        graphGrid.classList.add("zero-opacity");
      }
    },
    stepEnterHandler(event) {
      // console.log(event);
      // Convenient variables
      const index = event.index;
      const direction = event.direction;
      const isLastCategory = event.element.className.includes("last-category");
      const thisStep = index + direction;
      const up = direction == "up";
      const down = direction == "down";
      const indicatorMover = this.$refs["indicator-mover-1"];
      const indicator = this.$refs["indicator-1"];
      const stepIndicator = this.$el.querySelector(
        `#scroll_${index} .scrolly-step-indicator`
      );

      // Do on every step
      indicator.classList.add("feedback--click");
      setTimeout(() => {
        indicator.classList.remove("feedback--click");
      }, 400);

      if (stepIndicator && this.lastIndex != index) {
        // exclude last category switch & up direction
        // console.log(isLastCategory);
        if (!isLastCategory && !up) {
          this.$store.commit("progressBar/ADD_TO_STEP_ARRAY", index);
          this.$helpers.displayOrHideProgressBar("display");
        }
      }

      console.log(index, direction);

      // Steps
      switch (index) {
        case 0:
          if (down) {
            indicatorMover.classList.add("active");
          } else if (up) {
            this.setActiveCats([""]);
            indicatorMover.classList.remove("active");
          }
          break;

        case 1:
          this.setActiveCats(["env"]);
          break;

        case 2:
          this.setActiveCats(["env", "soc"]);
          break;

        case 3:
          this.setActiveCats(["env", "soc", "gg"]);
          break;

        case 4:
          this.setActiveCats(["env", "soc", "gg", "profit"]);
          break;

        case 5:
          this.displayOrHideGrid("hide");

          this.setActiveCats(["soc"]);
          this.$store.commit("year/SET_USE_YEAR_RANGE", false);
          this.$store.commit("proposals/UPDATE_PROPOSAL_FILTER", {
            logic: "or",
            array: []
          });
          // if (down) {
          //   if (this.lastIndex != index) {
          //     // this.browseThroughYears(this.yearRange[1]);
          //   }
          // } else if (up) {
          //   // this.changeYear(2010);
          // }
          break;

        case 6:
          this.displayOrHideGrid("display");
          // SET_USE_YEAR_RANGE
          this.$store.commit("year/SET_USE_YEAR_RANGE", true);
          this.$store.commit("proposals/UPDATE_PROPOSAL_FILTER", {
            logic: "or",
            array: [
              { prop: "resolution", val: "weapon" },
              { prop: "resolution", val: "gun" },
              { prop: "desc", val: "gun" },
              { prop: "company", val: "sturm" }
            ]
          });
          break;

        case 7:
          this.displayOrHideGrid("display");
          // SET_USE_YEAR_RANGE
          this.$store.commit("year/SET_CURRENT_YEAR_RANGE", [2010, 2016]);
          this.$store.commit("year/SET_USE_YEAR_RANGE", true);
          this.$store.commit("proposals/UPDATE_PROPOSAL_FILTER", {
            logic: "or",
            array: [{ prop: "company", val: "amazon" }]
          });
          break;

        // case 6:
        //   if (down) {
        //     this.$store.commit(
        //       "proposals/SET_ARE_DISTINCT_OUTLINES_ACTIVE",
        //       true
        //     );
        //   } else if (up) {
        //     this.$store.commit(
        //       "proposals/SET_ARE_DISTINCT_OUTLINES_ACTIVE",
        //       false
        //     );
        //   }
        //   break;
        case 9:
          if (down) {
            indicator.classList.remove("active");
          } else if (up) {
            indicator.classList.add("active");
          }
      }

      // Update last step
      this.lastStep = thisStep;
      this.lastIndex = index;
    },
    drawSmthRandom() {
      anime({
        targets: ".drawing-canvas-svg",
        opacity: 1
      });
      anime({
        targets: ".drawing-canvas-svg path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 500,
        delay: function(el, i) {
          return i * 1000;
        }
      });
    },
    removeDrawing() {
      anime({
        targets: ".drawing-canvas-svg path",
        strokeDashoffset: [0, anime.setDashoffset],
        easing: "easeInOutSine",
        duration: 500,
        delay: function(el, i) {
          return i * 1000;
        }
      });
      anime({
        targets: ".drawing-canvas-svg",
        opacity: 0
      });
    }
  }
};
</script>
