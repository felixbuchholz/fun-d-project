<template>
  <div class="page-container">
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
