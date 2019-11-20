<template>
  <div id="default-layout" v-resize:throttle="onResize">
    <nuxt />
  </div>
</template>

<script>
import resize from "vue-resize-directive";

export default {
  directives: {
    resize
  },
  methods: {
    onResize(element) {
      // console.log("resized IntroAnimation");
      // this.$helpers.resize(this);
      this.$store.commit("window/CHANGE_WINDOW", {
        property: "height",
        value: this.$helpers.getViewportSize().height
      });
      this.$store.commit("window/CHANGE_WINDOW", {
        property: "width",
        value: this.$helpers.getViewportSize().width
      });

      setTimeout(() => {
        // console.log("resized");
        const svgContainer = element.querySelector(".svg-container");
        // console.log(svgContainer);
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
        // console.log(width, height);
      }, 20);
    }
  }
};
</script>
