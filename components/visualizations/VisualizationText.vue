<template>
  <div class="scrolly-telling-text">
    <Scrollama @step-enter="stepEnterHandler">
      <div class="margin-scrollama-text">CONTAINER FOR LLAMA</div>
      <div class="margin-scrollama-text">CONTAINER FOR LLAMA</div>
      <div class="margin-scrollama-text">CONTAINER FOR LLAMA</div>
    </Scrollama>
  </div>
</template>
<script>
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
          } else if (up) {
            console.log("2 down");
          }
          break;
      }
    }
  }
};
</script>
