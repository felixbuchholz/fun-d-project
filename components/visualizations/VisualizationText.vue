<template>
  <div class="scrolly-telling-text">
    <div class="scroll-popover-modal hidden zero-opacity">
      <div class="scroll-popover-container">
        <fa icon="spinner" class="scroll-popover-icon rotating" />
        <div class="scroll-popover-message">
          Please wait until animation is finished&nbsp;…
        </div>
      </div>
    </div>
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
          <span style="font-weight: 800;">social</span>category are often calls
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

      <div id="sroll_4" class="margin-scrollama-text">
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

      <div class="margin-scrollama-text">
        This is where some drawing happens.
      </div>

      <div class="margin-scrollama-text">
        This is where some drawing happens.
      </div>
    </Scrollama>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  methods: {
    setActiveCats(array) {
      this.$store.commit("proposals/SET_ACTIVE_CATEGORIES", array);
    },
    stepEnterHandler(event) {
      const up = event.direction == "up";
      const down = event.direction == "down";
      switch (event.index) {
        case 0:
          if (down) {
            console.log("0 down");
            this.setActiveCats(["env"]);
          } else if (up) {
            console.log("0 up");
            this.setActiveCats([]);
          }
          break;

        case 1:
          if (down) {
            console.log("1 down");
            this.setActiveCats(["env"]);
          } else if (up) {
            console.log("1 up");
            this.setActiveCats(["env"]);
          }
          break;

        case 2:
          if (down) {
            console.log("2 down");
            this.setActiveCats(["env", "soc"]);
          } else if (up) {
            console.log("2 up");
            this.setActiveCats(["env"]);
          }
          break;

        case 3:
          if (down) {
            console.log("3 down");
            this.setActiveCats(["env", "soc", "gg"]);
            //this.select(".gg").style("color: red")
          } else if (up) {
            console.log("3 up");
            this.setActiveCats(["env", "soc"]);
          }
          break;

        case 4:
          if (down) {
            console.log("4 down");
            this.setActiveCats(["env", "soc", "gg", "profit"]);
          } else if (up) {
            console.log("4 up");
            this.setActiveCats(["env", "soc", "gg"]);
          }
          break;

        case 5:
          if (down) {
            console.log("5 down");
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
          } else if (up) {
            console.log("5 up");
          }
          break;
      }
    }
  }
};
</script>
