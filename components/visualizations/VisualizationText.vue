<template>
  <div id="scrolly1" class="scrolly-telling-text">
    <!-- TODO: transition not working (classes work) -->
    <transition name="fade">
      <div v-if="processCounter > 1" class="scroll-popover-modal">
        <div class="scroll-popover-container">
          <fa icon="spinner" class="scroll-popover-icon rotating" />
          <div class="scroll-popover-message">
            Please wait until animation is finished&nbsp;…
          </div>
        </div>
      </div>
    </transition>

    <fa icon="long-arrow-alt-right" class="scrolly-indicator" />

    <Scrollama @step-enter="stepEnterHandler">
      <div id="sroll_0" class="margin-scrollama-text">
        <h4 class="scrollyTitle">
          Where activists meet the passive investment giants
        </h4>
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
        Funds from one manager may vote differently. This visual takes the most
        common vote for each manager.
      </div>

      <div id="sroll_1" class="margin-scrollama-text">
        <fa icon="spinner" class />
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

      <div id="sroll_2" class="margin-scrollama-text">
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

      <div id="sroll_3" class="margin-scrollama-text">
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
          its funds. <br />Lighter
          <span class="gov_li_light" style="vertical-align: -2px">&#8226;</span>
          : manager supported the company's management.
        </p>
      </div>

      <div class="margin-scrollama-text" id='sroll_5'  >
         <p>Clearly, these asset managers are more often supporting management. Most activist proposals do not pass at general shareholders meetings. The average support for shareholder proposals is about 30%. However, looking at two shareholder proposal types in detail shows there are varying degrees of support.</p>
      </div>



      <div class="margin-scrollama-text">
        This is where some drawing happens.
      </div>

      <div class="margin-scrollama-text">
        This is where the distinct outlines are activated
      </div>
    </Scrollama>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import { mapState } from "vuex";

export default {
  methods: { 
    setActiveCats(array) {
      this.$store.commit("proposals/SET_ACTIVE_CATEGORIES", array);
    },
    setActiveCats(array) {
      this.$store.commit("proposals/SET_ACTIVE_CATEGORIES", array);
    },
    stepEnterHandler(event) {
      const index = event.index;
      const direction = event.direction;
      const up = direction == "up";
      const down = direction == "down";

      console.log(index, direction);

      switch (index) {
        case 0:
          if (down) {
            this.setActiveCats([]);
          } else if (up) {
            this.setActiveCats([]);
          }
          break;

        case 1:
          if (down) {
            this.setActiveCats(["env"]);
          } else if (up) {
            this.setActiveCats(["env"]);
          }
          break;

        case 2:
          if (down) {
            this.setActiveCats(["env", "soc"]);
          } else if (up) {
            this.setActiveCats(["env"]);
          }
          break;

        case 3:
          if (down) {
            this.setActiveCats(["env", "soc", "gg"]);
            //this.select(".gg").style("color: red")
          } else if (up) {
            this.setActiveCats(["env", "soc"]);
          }
          break;

        case 4:
          if (down) {
            this.setActiveCats(["env", "soc", "gg", "profit"]);
          } else if (up) {
            this.setActiveCats(["env", "soc", "gg"]);
          }
          break;
          
        case 5:
          if (down) {
            this.drawSmthRandom();
          } else if (up) {
            this.removeDrawing();
          }
          break;

        case 6:
          if (down) {
            this.$store.commit(
              "proposals/SET_ARE_DISTINCT_OUTLINES_ACTIVE",
              true
            );
          } else if (up) {
            this.$store.commit(
              "proposals/SET_ARE_DISTINCT_OUTLINES_ACTIVE",
              false
            );
          }
          break;
      }
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
