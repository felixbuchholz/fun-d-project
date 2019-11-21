<template>
  <div class="scrolly-telling-text">
    <Scrollama @step-enter="stepEnterHandler">
      <div class="margin-scrollama-text">CONTAINER FOR LLAMA</div>
      <div id="tester" class="margin-scrollama-text">
        This is where env comes in. When scrolling up it is removed again.
        Turned on the border so you see the whole container. With scrollama it
        sometimes makes sense to have a smaller div to control the state and
        then a larger one for the spacing. We can also change the height on
        screen when the trigger happens.
      </div>
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

<style lang="scss">
#tester {
  border: 1px solid;
}
</style>
