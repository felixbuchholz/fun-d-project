<template>
  <div id="drawing"></div>
</template>

<script>
export default {
  name: "IntroAnimation",
  mounted() {
    var draw = SVG("drawing").size(900, 900);

    var piggy = draw.group();
    var piggyBody = piggy.path(
      "M69.4 93.1H57.6l-.7-4.7c-1.7.2-3.5.4-5.2.5-3.1 0-6.1-.1-9.2-.6L39 93.1H27.1v-9.8C16.4 77.7 8 68.3 3.6 57V45.3c3.7 0 7.3-.5 10.5-2.4 1.9-1.2 3.3-2.8 4.9-4.4 1.7-1.8 3.5-3.4 5.5-4.8V21.9c2.3 0 4.6.1 6.8.7 2.9.8 5.6 2.4 7.8 4.5 12.9-3 27.5-.6 38 7.7 8.9 7 14 18.2 10.9 29.5-2 7.2-7 13.2-13.1 17.3l-5.5 11.5z"
    );
    var piggyEye = piggy.path("M95.1,50.7c0,3.4-2.8,6.2-6.2,6.2");
    var piggyTail = piggy.path(
      "M22,46.2c0,2.4,1.9,4.3,4.3,4.3s4.3-1.9,4.3-4.3"
    );
    piggyBody.addClass("piggy");
    piggyEye.addClass("piggy");
    piggyTail.addClass("piggy");
    const that = this;
    piggy.click(function() {
      if (that.playing) {
        this.pause();
        that.playing = false;
      } else {
        this.play();
        that.playing = true;
      }
    });
    piggy
      .animate(500, "<>", 0)
      .move(100, 100)
      .queue(function() {
        setTimeout(() => {
          console.log("second");
          this.dequeue(); // dont forget to call dequeue when the queue should continue running
        }, 1500);
        console.log("first");
      })
      .animate(800, "<>", 0)
      .move(50, 50)
      .animate(1000, "<>", 0)
      .transform({ scale: 1.5 })
      .loop(3, true);
  }
};
</script>

<style lang="scss" scoped></style>
