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
      Alongside the rise of retirement funds <br />
      <span class="bold">passive investment grew</span>
    </div>

    <div
      id="fund-concept"
      class="left zero-opacity"
      style="transform: scale(0)"
    >
    An index fund buys securities from <br> a pre-defined selection of companies <br />
      <!-- <span class="bold">passive investment grew</span> -->
    </div>

    <div
      id="fund-concept-two"
      class="left  zero-opacity"
      style="transform: scale(0)"
    >
    <br>
    based on an existing list - an index. <br />
      <!-- <span class="bold">passive investment grew</span> -->
    </div>

    <div
      id="why-pass-work"
      class="left  zero-opacity"
      style="transform: scale(0)"
    >
    <br>
    Why does index investing work? <br />
    </div>

    <div
      id="cheap-diversific"
      class="left zero-opacity"
      style="transform: scale(0)"
    >
    <br>
    Index investing enables cheap diversification<br />
    </div>

    <div
      id="diversific"
      class="left  zero-opacity"
      style="transform: scale(0)"
    >
    <br>
    Diversification<br />
    </div>

    <div
      id="haystack"
      class="left zero-opacity"
      style="transform: scale(0)"
    >
    <br>
    Through index funds "you can just buy the haystack"<br />
    <br>  
    <span style="color:#B7B0B0">John Bogle</span>
    </div>


    <div
      id="winners-pass"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
    <br>
    Winners of the passive investment trend<br />
    </div>

    <div
      id="winners-pass-two"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
    <br>
    These three have about $15 trillion in assets under management<br />
    </div>

    <div
      id="managing"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
    <br>
    ... managing thousands of funds, each composed of many companies.<br />
    </div>

    <div
      id="get_to_vote"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
    <br>
    Asset managers get to vote on the shares in the funds they manage<br />
    </div>

    <div
      id="share_of_comps"
      class="left zero-opacity"
      style="transform: scale(0)"
    >
    <br>
    The share of companies owned by index funds is larger than ever<br />
    </div>


    <div
      id="how_using_influence"
      class="center zero-opacity"
      style="transform: scale(0)"
    >
    <br>
    How are the largest asset managers using their influence?<br />
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

