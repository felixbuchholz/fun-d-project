<template>
  <div id="progress-modal" class="hidden zero-opacity">
    <div
      id="progress-mover"
      :style="
        `transform: translateX(${transform}%); transition: transform ${animationDuration}ms linear;`
      "
    ></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState({
      animationDuration: state => state.progressBar.animationDuration
    }),
    ...mapGetters({
      transform: [`progressBar/transform`]
    })
  }
};
</script>
