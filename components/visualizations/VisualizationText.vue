<template>
  <div id="scrolly1" class="scrolly-telling-text">
    <!-- TODO: transition not working (classes work) -->
    <transition name="fade">
      <div v-if="processCounter > 2" class="scroll-popover-modal">
        <div class="scroll-popover-container">
          <fa icon="spinner" class="scroll-popover-icon rotating" />
          <div class="scroll-popover-message">
            Please wait until animation is finished&nbsp;…
          </div>
        </div>
      </div>
    </transition>

    <div ref="indicator-mover-1" class="scrolly-indicator-mover">
      <div
        ref="indicator-1"
        class="scrolly-indicator feedback feedback--effect-ivana small"
      >
        <fa icon="long-arrow-alt-right" class />
      </div>
    </div>

    <Scrollama :offset="0.35" @step-enter="stepEnterHandler">
      <div id="scroll_0" :class="`margin-scrollama-text ${getLoadingState(0)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <h3 class="scrollyTitle">
          Where activists meet the passive investment giants
        </h3>

        <!-- <p>
          First look at how these three asset management firms compare in terms
          of siding with or against management.
          <br />We zoom in on proposals brought by shareholders, and categorize
          those by topics. We focus on three main issues:
        </p> -->
        <!-- <ul>
          <li class="env_li">
            <span>environmental</span>
          </li>
          <li class="soc_li">
            <span>social</span>
          </li>
          <li class="gov_li">
            <span>governance</span>
          </li>
        </ul> -->
        <p>
          Funds from one manager may vote differently. This visual takes the
          most common vote for each manager.
        </p>

      </div>
      <!-- end scroll 0 -->

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
      <!-- end scroll 1 -->

      <div id="scroll_2" :class="`margin-scrollama-text ${getLoadingState(2)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          Topics in the
          <span class="soc_li" style="vertical-align: -1px">&#8226;</span>
          <span style="font-weight: 800;">social</span> category are often calls
          for companies to be more transparent about political contributions;
          their lobbying; human rights policies. <br />Social shareholder
          proposals also include employment issues such as employee diversity,
          pay-gaps and greater support for workers’ rights (for example minimum
          wage reform).
        </p>
      </div>
      <!-- end scroll 2 -->

      <div id="scroll_3" :class="`margin-scrollama-text ${getLoadingState(3)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          Proposals targeting
          <span class="gov_li" style="vertical-align: -2px">&#8226;</span>
          <span style="font-weight: 800;">governance</span> changes relate to
          the leadership of companies. This can be issues such as boardroom
          diversity, separating a company’s chairman and CEO roles (to
          de-concentrate corporate leadership), and proposals to empower
          minority shareholder blocks.
        </p>

      </div>

      <div
        id="scroll_4"
        :class="`margin-scrollama-text ${getLoadingState(4)} last-category`"
      >
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          We noticed funds voted on a few shareholder proposals asking the target company to
          hire an advisor to maximize shareholder value. Most of this comes from
          "activist hedge funds" that buy a certain amount of stock in a
          company, to be able to enforce key changes at target companies. The
          goal of shareholder value maximization is not without controversy. It
          can conflict with other stakeholders’ interests, like when a
          reorganization seeks to dispose of many employees, with the purpose of
          realizing a short-term gain rather than improving the company.
          <br />
          <br />Sometimes however hedge funds are useful for their extensive
          research into structural improvement opportunities in companies that
          are ineffectively managed. Board members can be lazy, in need of a
          shakeup. Activist shareholder proposals can be justified or not - it
          depends. For other shareholders, including asset managers, this
          assessment requires an active approach to proxy voting.
        </p>
      </div>

      <!-- <Scrolling over the years> -->
      <!-- <p>Clearly, these asset managers are more often supporting management by voting against activist shareholders. Most shareholder proposals do not pass. The average support for shareholder proposals has been fairly constant at about 30% over the past 10 years. However, shareholder meeting dynamics did change significantly in this period. Shareholders became more active: more capital was invested by activists to force corporate change, and shareholders submitted more resolutions. <br /> <br />
        Meanwhile, voting has become less of a “compliance” exercise: institutional shareholders have become more keen on pro-active engagement as “stewards”. This shows as good corporate governance rose as a focus area for investors. That is probably also because of governance scandals (think Kobe Steel or Volkswagen) and increased regulatory attention. In most recent years, a record shareholder proposals is about social and environmental issues - and an increasing amount of such proposals pass.</p> -->

      <div id="scroll_5" :class="`margin-scrollama-text ${getLoadingState(5)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          After Parkland, Florida, mass shootings raised questions on gun safety
          laws. Where the Trump administration is reluctant to overhaul gun
          laws, some corporate shareholders are pushing for stronger gun control
          policies. <br />
          <br />
          Firearm companies like American Outdoor Brands and Sturm, Ruger &amp;
          Co were targeted by investors to produce a report on gun violence.
          Also Dick’s Sporting Goods and the insurance company Chubb had gun
          safety activism from shareholders. Dick’s Sporting Goods announced in
          2018 that it would no longer sell assault-style weapons. An individual
          investor filed a shareholder proposal with Chubb; requesting that
          Chubb end its NRA Carry Guard insurance plan, that offered coverage to
          individuals who use their weapons in self-defense. Chubb avoided to
          have the proposal put to vote (using a
          <a
            href="https://www.sec.gov/divisions/corpfin/cf-noaction/14a-8/2018/stewarttaggart021318-14a8.pdf"
            target="_blank"
            >legal exemption</a
          >), but changed its policy later anyways. <br /><br />
          In 2018, a shareholder proposal asking
          <a
            href="https://www.npr.org/sections/thetwo-way/2018/05/10/610019218/sturm-ruger-will-track-gun-violence-after-shareholders-back-activist-resolution"
            target="_blank"
            >Sturm Ruger</a
          >
          to track and report on gun violence involving its products won the
          support of all asset managers for the first time.
        </p>
      </div>

      <div id="scroll_6" :class="`margin-scrollama-text ${getLoadingState(6)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          For companies in mutual fund portfolios, we noticed a clear increase of shareholder activism addressing workplace diversity in the past years. The New York City Pension Fund has been pushing for a standardized disclosure of directors’ gender, race and skills. More and more shareholders seem unwilling to approve boards that fully lack diversity. <br><br> In addition to shareholder activists, the largest proxy advisor (ISS) said recently in its <a
          href="https://www.issgovernance.com/file/policy/latest/updates/Executive-Summary-of-ISS-Policy-Updates-and-Process.pdf"
          target="_blank">2020 vote guidelines</a> that it will not support board nominees at larger companies when there are no women on the company’s board. For the upcoming years, this trend is to continue. Also state legislation is playing a role: companies headquartered in the <a href="https://www.sos.ca.gov/business-programs/women-boards/"
          target="_blank">state of California</a> must have at least one female director.



          
        </p>
      </div>

      <div id="scroll_7" :class="`margin-scrollama-text ${getLoadingState(7)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          In 2016, more than 174 countries signed the UN Paris Agreement to strengthen the global response to climate change. They committed to keep a global temperature rise during this century below 2 degrees Celsius, compared to pre-industrial levels. <br><br>  This seemed to create a momentum for shareholder activism on climate change. In the fund vote data, as of 2016 multiple shareholders submitted proposals calling for companies to look at climate change impact or the 2 degrees goal. <br><br> The United States decided to withdraw from the Paris Agreement by June 2017, for which the process started November 2019.
        </p>
      </div>

      <!-- <div id="scroll_8" :class="`margin-scrollama-text ${getLoadingState(8)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          Now filtering in the columns item description and resolution for pay,
          compensation or “executive”.
        </p>
      </div> -->

      <!-- <div id="scroll_9" :class="`margin-scrollama-text ${getLoadingState(9)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          This is filtered by proposals that match company column includes
          "amazon" for the years 2010 – 2016.
        </p>
      </div> -->

      <!-- <div id="scroll_x" :class="`margin-scrollama-text ${getLoadingState(x)}`">
        <fa icon="spinner" class="scrolly-step-indicator" />
        <p>
          In this step we can just experiment with things:
          <br />One option for the final version: “click” through a couple of
          years <br />Right now: Narrog down to the social category again
        </p>
      </div>-->

      <!-- <div class="margin-scrollama-text">
        This is where the distinct outlines are activated
      </div>
      <div class="margin-scrollama-text">This is just for spacing</div>
      <div class="margin-scrollama-text">This is just for spacing</div> -->
      <div class="scrolly-spacer"></div>
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

    stepEnterHandler(event) {
      // console.log(event); // in case needed for checking
      //──── Structure ─────────────────────────────────────────────────────────────────────────
      // 1. Set up all convenience variables first
      // 2. Include functions that should work on every step
      // ...for example the ripple effect on the trigger position indicator
      // ... and include special conditions
      // 3. Test for the step index and

      //──── 1. Convenient variables ───────────────────────────────────────────────────────────
      const index = event.index;
      const direction = event.direction;
      const isLastCategory = event.element.className.includes("last-category");
      const thisStep = index + direction;
      const up = direction == "up"; // true or false
      const down = direction == "down"; // true or false
      const indicatorMover = this.$refs["indicator-mover-1"];
      const indicator = this.$refs["indicator-1"];
      const stepIndicator = this.$el.querySelector(
        `#scroll_${index} .scrolly-step-indicator`
      );
      console.log(index, direction);

      //──── 2. On every step and special conditions ───────────────────────────────────────────
      // Trigger position ripple effect
      indicator.classList.add("feedback--click");
      setTimeout(() => {
        indicator.classList.remove("feedback--click");
      }, 400);

      // Show the progress bar & activate the loading animation
      if (stepIndicator && this.lastIndex != index) {
        // console.log(isLastCategory);
        // exclude last category switch & up direction
        if (!isLastCategory && !up) {
          this.$helpers.displayOrHideProgressBar("display");
          this.$store.commit("progressBar/ADD_TO_STEP_ARRAY", index);
        }
      }

      //──── 3. Steps ──────────────────────────────────────────────────────────────────────────
      switch (index) {
        case 0:
          // this.setActiveCats(["env"]);
          // this.$store.commit("year/SET_USE_YEAR_RANGE", true);
          // this.$store.commit("year/SET_CURRENT_YEAR_RANGE", [2010, 2018]);
          // this.$store.commit("proposals/UPDATE_PROPOSAL_FILTER", {
          //   resolution: "nuclear",
          //   _text: true
          // });
          //──── testArea end ──────────────────────────────────────────────────────────────────────
          if (down) {
            // Display the trigger position indicator, add legend
            indicatorMover.classList.add("active");
            // this.drawSmthRandom()
          } else if (up) {
            // remove all the nodes, keep only legend
            this.setActiveCats([""]);
            // Hide the trigger position indicator
            indicatorMover.classList.remove("active");
            this.$store.commit("forceGraph/SET_LEGEND_ACTIVE", true);
            // you can use all mutations, but value of state is not available directly
          }
          break;

        case 1:
          // activate the environment category
          //this.removeDrawing()
          this.$store.commit("forceGraph/SET_LEGEND_ACTIVE", false);
          this.setActiveCats(["env"]);
          break;

        case 2:
          // activate the environment & social category
          this.setActiveCats(["env", "soc"]);
          break;

        case 3:
          // activate the environment & social & good governance category
          this.setActiveCats(["env", "soc", "gg"]);
          break;

        case 4:
          // activate the environment & social & good governance & profit category
          this.setActiveCats(["env", "soc", "gg", "profit"]);
          if (down) {
            // For down: next & previous year buttons will be available
            this.$store.commit("year/SET_ACTIVATE_YEAR_BUTTONS", true);
          } else if (up) {
            // For up: next & previous year buttons will be hidden
            this.$store.commit("year/SET_ACTIVATE_YEAR_BUTTONS", false);
            // The proposal filter will be cleared
            this.$store.commit("proposals/UPDATE_PROPOSAL_FILTER", {});
            // Switch back to a single year view
            this.$store.commit("year/SET_USE_YEAR_RANGE", false);
          }
          break;

        // Here we thought about “clicking through years”
        // a function is ready for that:
        //  this.browseThroughYears(this.yearRange[1]);
        // the argument is the end year

        case 5:
          // Switch to a range of years instead of just one
          // the grid for that will automatically be displayed

          // here year=module of file and then take that function=mutation and which value to commit.
          this.$store.commit("year/SET_USE_YEAR_RANGE", true);

          // This is how we could filter
          // for guns control related proposals

          // ! Do not use this structure anymore !
          // this.$store.commit("proposals/UPDATE_PROPOSAL_FILTER", {
          //   logic: "or",
          //   array: [
          //     { prop: "resolution", val: "weapon" },
          //     // The additional filters are not necessarily needed
          //     // for now just to showcase the use of multiple filters
          //     { prop: "resolution", val: "gun" },
          //     { prop: "desc", val: "gun" },
          //     { prop: "company", val: "sturm" }
          //   ]
          // });

          // ! Instead use this !
          this.$store.commit("proposals/UPDATE_PROPOSAL_FILTER", {
            _join: "OR",
            terms: [
              { resolution: "weapon", _text: true },
              { resolution: "weapons", _text: true },
              { resolution: "Weapons", _text: true },
              { resolution: "gun", _text: true },
              { desc: " gun", _text: true }
            ]
          });
          break;

        case 6:
          // this.$store.commit("year/SET_USE_YEAR_RANGE", true); // in case needed if in different position
          // this.$store.commit("year/SET_CURRENT_YEAR_RANGE", [2010, 2018]);

          // This is how we could filter
          // for diversity related proposals
          this.$store.commit("proposals/UPDATE_PROPOSAL_FILTER", {
            _join: "OR",
            terms: [
              { resolution: "diversity", _text: true },
              { desc: "diversity", _text: true }
            ]
          });
          break;

        case 7:
          // this.$store.commit("year/SET_USE_YEAR_RANGE", true); // in case needed if in different position
          // this.$store.commit("year/SET_CURRENT_YEAR_RANGE", [2010, 2018]);

          // This is how we could filter
          // for 2 degree goal related proposals

          this.$store.commit("proposals/UPDATE_PROPOSAL_FILTER", {
            _join: "OR",
            terms: [
              {
                _join: "OR",
                terms: [
                  { desc: "degree", _text: true },
                  { desc: "degrees", _text: true },
                  { desc: "climate change", _text: true },
                ]
              },
              {
                _join: "AND",
                terms: [
                  { resolution: "degree", _text: true },
                  { resolution: "goal", _text: true }
                ]
              }
            ]
          });
          break;

        case 8:
          // this.$store.commit("year/SET_USE_YEAR_RANGE", true); // in case needed if in different position
          this.$store.commit("year/SET_CURRENT_YEAR_RANGE", [2010, 2018]);

        // This is how we could filter
        // for executive compensation proposals
        // this.$store.commit("proposals/UPDATE_PROPOSAL_FILTER", {
        //   _join: "OR",
        //   terms: [
        //     {
        //       _join: "AND",
        //       terms: [
        //         { desc: "executive", _text: true },
        //         {
        //           _join: "OR",
        //           terms: [
        //             { desc: "pay", _text: true },
        //             { desc: "compensation", _text: true }
        //           ]
        //         }
        //       ]
        //     },
        //     {
        //       _join: "AND",
        //       terms: [
        //         { resolution: "executive", _text: true },
        //         {
        //           _join: "OR",
        //           terms: [
        //             { resolution: "pay", _text: true },
        //             { resolution: "compensation", _text: true }
        //           ]
        //         }
        //       ]
        //     }
        //   ]
        // });
        // break;

        // case 9:
        //   // this.$store.commit("year/SET_USE_YEAR_RANGE", true); // in case needed if in different position
        //   this.$store.commit("year/SET_CURRENT_YEAR_RANGE", [2010, 2016]);

        //   this.$store.commit("proposals/UPDATE_PROPOSAL_FILTER", {
        //     company: "amazon",
        //     _text: true
        //   });
        //   break;

        // ! This is how we would activate distinct outlines !
        // case x:
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

        // ! include this at the end
        // case last_case:
        //   if (down) {
        //     indicator.classList.remove("active");
        //   } else if (up) {
        //     indicator.classList.add("active");
        //   }
      }

      //──── To be able to compare what the last checkpoint was ────────────────────────────────
      // Update last step
      this.lastStep = thisStep;
      this.lastIndex = index;
    }, // last step in scrollama!
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
          return i * 100;
        }
      });
    },
    showDrawing() {
      anime({
        targets: ".drawing-canvas-svg",
        opacity: 1,
        easing: "easeInOutSine",
        duration: 500
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
