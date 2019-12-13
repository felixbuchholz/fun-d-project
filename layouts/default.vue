<template>
  <div id="default-layout" v-resize:throttle="onResize">
    <ProgressBar />
    <nuxt />
  </div>
</template>

<script>
import ProgressBar from "~/components/ui/ProgressBar.vue";

export default {
  components: { ProgressBar },
  methods: {
    onResize(element) {
      // console.log("resized IntroAnimation");
      // this.$helpers.resize(this);
      const width = this.$helpers.getViewportSize().width;
      const height = this.$helpers.getViewportSize().height;

      this.$store.commit("window/CHANGE_WINDOW", {
        property: "width",
        value: width
      });
      this.$store.commit("window/CHANGE_WINDOW", {
        property: "height",
        value: height
      });

      setTimeout(() => {
        // console.log("resized");
        const svgContainer = element.querySelector(".svg-container");
        // console.log(svgContainer);
        if (svgContainer && svgContainer.offsetHeight < width) {
          const width = svgContainer.offsetWidth;
          this.$store.commit("forceGraph/CHANGE_MANAGER_SIZE", {
            property: "width",
            value: width
          });
          const height = svgContainer.offsetHeight;
          this.$store.commit("forceGraph/CHANGE_MANAGER_SIZE", {
            property: "height",
            value: height
          });
        }
        // console.log(width, height);
      }, 20);
    }
  }
};
</script>
