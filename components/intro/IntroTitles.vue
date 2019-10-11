<template>
  <!-- `transform: translateX(${xPosition}px) translateY(${yPosition}px; text-align: ${align})` -->
  <div
    id="titles"
    class="current-title"
    :style="`transform: translateX(${title.x}px) translateY(${title.y}px)`"
  >
    <p id="financial-future" class="center zero-opacity">
      How do people approach their <br />
      <span class="bold">financial future?</span>
    </p>
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
