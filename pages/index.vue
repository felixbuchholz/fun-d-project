<template>
  <div class="page-container">
    <!-- <IntroAnimation /> -->
    <IntroAnimationAnime />
    <div id="drawing"></div>
  </div>
</template>

<script>
// import IntroAnimation from "~/components/IntroAnimation.vue";
import IntroAnimationAnime from "~/components/IntroAnimationAnime.vue";

export default {
  components: {
    IntroAnimationAnime
  },
  data() {
    return {
      playing: true
    };
  }
};
</script>

<style lang="scss"></style>
