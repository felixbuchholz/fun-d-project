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
    onResize() {
      // console.log("resized IntroAnimation");
      this.$helpers.resize(this);
    }
  }
};
</script>
