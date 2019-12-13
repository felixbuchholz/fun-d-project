<template>
  <div id="page-container">
    <IntroHeader />
    <Intro />
    <!-- <ScrollyTelling /> -->
  </div>
</template>

<script>
// import IntroAnimation from "~/components/IntroAnimation.vue";
import IntroHeader from "~/components/intro/IntroHeader.vue";
import Intro from "~/components/intro/Intro.vue";
import ScrollyTelling from "~/components/visualizations/ScrollyTelling.vue";

export default {
  head() {
    return {
      title: "Three passive elephants in the room",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid:
            "A visualization of mutual funds vote data. Analyzing proxy voting patterns of the world’s largest financial shareholders: BlackRock, Vanguard and State Street",
          name:
            "A visualization of mutual funds vote data. Analyzing proxy voting patterns of the world’s largest financial shareholders: BlackRock, Vanguard and State Street",
          content:
            "A visualization of mutual funds vote data. Analyzing proxy voting patterns of the world’s largest financial shareholders: BlackRock, Vanguard and State Street"
        }
      ]
    };
  },
  components: {
    IntroHeader,
    Intro,
    ScrollyTelling
  },
  data() {
    return {
      playing: true
    };
  }
};
</script>

<style lang="scss"></style>
