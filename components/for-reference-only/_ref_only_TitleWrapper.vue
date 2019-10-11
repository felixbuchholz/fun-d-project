<template>
  <!-- `transform: translateX(${xPosition}px) translateY(${yPosition}px; text-align: ${align})` -->
  <div id="titles">
    <div
      v-for="(title, index) in titles"
      :id="title.name"
      :key="`title-index${index}`"
      class="current-title-mover"
      :style="`transform: translateX(${title.x}px) translateY(${title.y}px)`"
      @click="title.clickHandler"
      v-html="title.title"
    ></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      titles: [
        {
          name: "financialfuture",
          title:
            "<p class='center'>How do people approach their <br> <span class='bold'>financial future?</span></p>",
          clickHandler: ""
        }
      ]
    };
  },
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
