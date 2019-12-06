<template>
  <div id="page-container">
    <IntroHeader />
    <Intro />
    <ScrollyTelling />
  </div>
</template>

<script>
// import IntroAnimation from "~/components/IntroAnimation.vue";
import IntroHeader from "~/components/intro/IntroHeader.vue";
import Intro from "~/components/intro/Intro.vue";
import ScrollyTelling from "~/components/visualizations/ScrollyTelling.vue";

export default {
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
