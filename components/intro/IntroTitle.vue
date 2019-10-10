<template>
  <!-- `transform: translateX(${xPosition}px) translateY(${yPosition}px; text-align: ${align})` -->
  <div id="current-title" class="zero-opacity">
    <div
      id="current-title-mover"
      :style="`transform: translateX(${x}px) translateY(${y}px)`"
      v-html="title"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default:
        "Sorry, something went wrong. Please check if props are passed to child component: 'IntroTitles.vue'"
    },
    align: {
      type: String,
      default: "center"
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },
  computed: {
    parsedTitle() {
      return this.title;
    }
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
