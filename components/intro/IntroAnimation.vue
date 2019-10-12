<template>
  <div
    id="intro-animation"
    ref="introAnimation"
    :style="`padding: ${window.animationFrame}px;`"
  >
    <div id="animation">
      <div id="svg-animation" v-resize:throttle="onResize">
        <svg id="intro-svg" :width="width" :height="height">
          <rect id="svg-background" :width="width" :height="height" />
          <ElementWrapper />
        </svg>
      </div>
      <!-- scale(0); -->
      <div
        id="html-animation"
        style="transform: translateX(-50%) translateY(-50%)"
      >
        <IntroTitles />
      </div>
      <IntroAnimationControls />
    </div>
  </div>
</template>

<script>
import resize from "vue-resize-directive";
import { mapState, mapGetters } from "vuex";

import IntroTitles from "~/components/intro/IntroTitles.vue";
import ElementWrapper from "~/components/intro/elements/ElementWrapper.vue";
import IntroAnimationControls from "~/components/intro/IntroAnimationControls.vue";

export default {
  name: "IntroAnimation",
  directives: {
    resize
  },
  components: { IntroTitles, ElementWrapper, IntroAnimationControls },
  computed: {
    ...mapState({
      window: state => state.window.window
    }),
    ...mapGetters({
      width: ["window/width"],
      height: ["window/height"]
    })
  },
  mounted() {
    // console.log("mounted IntroAnimation!");
  },
  methods: {
    onResize() {
      // console.log("resized IntroAnimation");
      this.$helpers.resize(this);
    }
  }
};
</script>

<style lang="scss">
$background: #fff;
$grey: #6e6e6e;

div,
rect,
svg {
  transition-property: width, height, position, transform;
  transition-timing-function: ease-out;
  transition-duration: 150ms;
}
#intro-animation {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #eee;
}
#svg-background {
  fill: $background;
}
#animation,
#svg-animation {
  position: relative;
  height: 100%;
  width: 100%;
}
#html-animation {
  z-index: 9;
  position: absolute;
  top: 50%;
  left: 50%;

  // display: flex;
  // background: red;
}
.line {
  fill: none;
  stroke: $grey;
  stroke-width: 3;
}
.line-thin {
  fill: none;
  stroke: $grey;
  stroke-width: 1.5;
}
.fill {
  fill: $grey;
}
.background {
  fill: $background;
}
.cap-round {
  stroke-linecap: round;
}
.linejoin-round {
  stroke-linejoin: round;
}
.both-round {
  stroke-linecap: round;
  stroke-linejoin: round;
}
text {
  fill: $grey;
  font-size: 18px;
}
.text-sign {
  font-size: 12px;
  font-weight: 900;
}
.zero-opacity {
  opacity: 0;
}
.hidden {
  visibility: hidden;
}
.zero-scale {
  transform: scale(0);
}
</style>
