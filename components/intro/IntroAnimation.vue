<template>
  <!-- the "ref" is how you refer to it from other vue files. Alternative to
  query selector or getbyID etc.-->
  <div
    id="intro-animation"
    :style="`padding: ${window.animationFrame}px;`"
    @mouseenter="loadResources"
  >
    <div id="animation">
      <div id="svg-animation">
        <svg id="intro-svg" :width="width" :height="height">
          <rect id="svg-background" :width="width" :height="height" />
          <ElementWrapper />
        </svg>
      </div>

      <div id="html-animation">
        <LogoWrapper />
        <IntroTitles />
        <researchimages />
        <indexlist />
        <diversification />
        <fundblobs />
        <bignumbers />
      </div>

      <IntroAnimationControls />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import IntroTitles from "~/components/intro/IntroTitles.vue";
import ElementWrapper from "~/components/intro/elements/ElementWrapper.vue";
import LogoWrapper from "~/components/intro/elements/LogoWrapper.vue";
import IntroAnimationControls from "~/components/intro/IntroAnimationControls.vue";
import researchimages from "~/components/intro/elements/researchimages.vue";
import indexlist from "~/components/intro/elements/index_list.vue";
import diversification from "~/components/intro/elements/diversification.vue";
import fundblobs from "~/components/intro/elements/fundblobs.vue";
import bignumbers from "~/components/intro/elements/bignumbers.vue";

export default {
  name: "IntroAnimation",
  components: {
    IntroTitles,
    ElementWrapper,
    LogoWrapper,
    IntroAnimationControls,
    researchimages,
    indexlist,
    diversification,
    fundblobs,
    bignumbers
  },
  computed: {
    ...mapState({
      window: state => state.window.window
    }),
    ...mapGetters({
      width: ["window/width"],
      height: ["window/height"]
    })
  },
  methods: {
    loadResources() {
      console.log("load now!");
      this.$store.commit("timeline/SET_SOUND_LOADED");
    }
  }
};
</script>
