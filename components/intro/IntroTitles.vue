<template>
  <!-- `transform: translateX(${xPosition}px) translateY(${yPosition}px; text-align: ${align})` -->
  <div
    id="titles"
    class="current-title"
    :style="`transform: translateX(${title.x}px) translateY(${title.y}px)`"
  >
    <div
      id="financial-future"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
      How do people approach their
      <span class="bold">financial future?</span>
    </div>

    <div
      id="passive-growth"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
      Alongside the rise of retirement funds
      <span class="bold">passive investment grew</span>
    </div>

    <div
      id="fund-concept"
      class="left zero-opacity"
      style="transform: scale(0)"
    >
      An index fund buys securities from
      <p>a pre-defined selection of companies</p>
      <!-- <span class="bold">passive investment grew</span> -->
    </div>

    <div
      id="fund-concept-two"
      class="left zero-opacity"
      style="transform: scale(0)"
    >
      based on an existing list - an index.
      <!-- <span class="bold">passive investment grew</span> -->
    </div>

    <div
      id="why-pass-work"
      class="left zero-opacity"
      style="transform: scale(0)"
    >
      Why does index investing work?
    </div>

    <div
      id="cheap-diversific"
      class="left zero-opacity"
      style="transform: scale(0)"
    >
      Index investing enables cheap diversification
    </div>

    <div id="diversific" class="left zero-opacity" style="transform: scale(0)">
      Diversification
    </div>

    <div
      id="haystack-title"
      class="left zero-opacity"
      style="transform: scale(0)"
    >
      Through index funds "you can just buy the haystack"
      <p style="color:#B7B0B0">John Bogle</p>
    </div>

    <div
      id="winners-pass"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
      Winners of the passive investment trend
    </div>

    <div
      id="winners-pass-two"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
      These three have about $15 trillion in assets under management
    </div>

    <div
      id="household-equivalent"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
      155 million US households
    </div>

    <div id="managing" class="center zero-opacity" style="transform: scale(0)">
      ... managing thousands of funds, each composed of many companies.
    </div>

    <div
      id="get_to_vote"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
      Asset managers get to vote on the shares in the funds they manage
    </div>

    <div
      id="share_of_comps"
      class="left zero-opacity"
      style="transform: scale(0)"
    >
      The share of companies owned by index funds is larger than ever
    </div>

    <div
      id="how_using_influence"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
      How are the largest asset managers using their influence?
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      title: state => state.timeline.currentTitle
    })
  }
};
</script>

<style lang="scss">
.center {
  text-align: center;
}
.right {
  text-align: right;
}
.left {
  text-align: left;
}
.bold {
  font-weight: 900;
}
.top {
  position: absolute;
  top: 10%;
}
</style>
