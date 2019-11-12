<template>
  <div id="page-container">
    <h1>Fund project</h1>
    <Intro />
  </div>
</template>

<script>
// import IntroAnimation from "~/components/IntroAnimation.vue";
import Intro from "~/components/intro/Intro.vue";

export default {
  components: {
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