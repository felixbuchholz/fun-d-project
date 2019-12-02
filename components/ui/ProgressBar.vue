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
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      transform: [`progressBar/transform`]
    })
  }
};
</script>
