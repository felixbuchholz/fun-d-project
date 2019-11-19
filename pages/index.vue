<template>
  <div id="page-container">
    <IntroHeader />
    <Intro />
  </div>
</template>

<script>
// import IntroAnimation from "~/components/IntroAnimation.vue";
import IntroHeader from "~/components/intro/IntroHeader.vue";
import Intro from "~/components/intro/Intro.vue";


export default {
  components: {
    IntroHeader,
    Intro
  },
  data() {
    return {
      playing: true
    };
  }
};
</script>

<style lang="scss"></style>