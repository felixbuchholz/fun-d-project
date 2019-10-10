<template>
  <!-- `transform: translateX(${xPosition}px) translateY(${yPosition}px; text-align: ${align})` -->
  <div id="current-title" class="zero-opacity">
    <div
      id="current-title-mover"
      :style="`transform: translateX(${title.x}px) translateY(${title.y}px)`"
      v-html="title.title"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      title: state => state.timeline.currentTitle
    })
  }
};
</script>

<style lang="scss">
.center {
  text-align: center;
  // transform: translateY(50%);
}
.right {
  text-align: right;
}
.left {
  text-align: left;
}
.bold {
  font-weight: 900;
}
</style>
