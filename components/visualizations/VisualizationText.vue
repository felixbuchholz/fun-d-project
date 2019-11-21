<template>
  <div class="scrolly-telling-text">
    <Scrollama @step-enter="stepEnterHandler">
      <div class="margin-scrollama-text">CONTAINER FOR LLAMA</div>
      <div class="margin-scrollama-text">
        This is where env comes in. When scrolling up it is removed again.
        Turned on the border so you see the whole container. With scrollama it
        sometimes makes sense to have a smaller div to control the state and
        then a larger one for the spacing. We can also change the height on
        screen where the trigger happens.
      </div>
      <div class="margin-scrollama-text">
        This is where some drawing happens.
      </div>
    </Scrollama>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  methods: {
    setActiveCats(array) {
      this.$store.commit("proposals/SET_ACTIVE_CATEGORIES", array);
    },
    stepEnterHandler(event) {
      const up = event.direction == "up";
      const down = event.direction == "down";
      switch (event.index) {
        case 1:
          if (down) {
            console.log("1 down");
            this.setActiveCats(["env"]);
          } else if (up) {
            console.log("1 up");
            this.setActiveCats([]);
          }
          break;
        case 2:
          if (down) {
            console.log("2 down");
            anime({
              targets: ".drawing-canvas-svg",
              opacity: 1
            });
            anime({
              targets: ".drawing-canvas-svg path",
              strokeDashoffset: [anime.setDashoffset, 0],
              easing: "easeInOutSine",
              duration: 1500,
              delay: function(el, i) {
                return i * 1000;
              }
            });
          } else if (up) {
            console.log("2 down");
          }
          break;
      }
    }
  }
};
</script>
