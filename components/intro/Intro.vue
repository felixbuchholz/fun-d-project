<template>
  <div id="intro-container">
    <IntroAnimation />
  </div>
</template>

<script>
import IntroAnimation from "~/components/intro/IntroAnimation.vue";
import IntroHeader from "~/components/intro/IntroHeader.vue"

export default {
  components: { IntroAnimation }
};
</script>

<style lang="scss" scoped></style>
