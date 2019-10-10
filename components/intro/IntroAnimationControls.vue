<template>
  <div id="animation-controls">
    <button id="start-button-big" @click="play">Play Intro</button>
    <div id="animation-drawer-controls">
      <div class="drawer">
        <button @click="play">Play!</button>
        <button @click="pause">Pause!</button>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import { Howl } from "howler";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      width: ["window/width"],
      height: ["window/height"]
    })
  },
  mounted() {
    this.defineSound();
    this.defineTimeline();
  },
  methods: {
    defineTimeline() {
      const that = this;
      this.tl = anime.timeline({
        easing: "easeOutExpo"
      });
      // Add children
      this.tl.add({
        targets: "#current-title",
        opacity: 1,
        duration: 2000,
        easing: "easeInOutSine"
      });
      this.tl.add(
        {
          targets: "#current-title",
          opacity: 0,
          duration: 2000,
          easing: "easeInOutSine",
          complete: function(anim) {
            that.changeTitle({ title: "" });
          }
        },
        "+=700"
      );
      this.tl.add({
        targets: "#piggy",
        opacity: 1,
        scale: 1,
        duration: 1500,
        easing: "easeInOutExpo"
      });
      this.tl.add(
        {
          targets: "#house",
          opacity: 1,
          scale: 1,
          duration: 1500,
          easing: "easeInOutExpo"
        },
        "+=500"
      );
      this.tl.add(
        {
          targets: "#nestegg",
          opacity: 1,
          scale: 1,
          duration: 1500,
          easing: "easeInOutExpo"
        },
        "+=3500"
      );
      this.tl.pause();
    },
    defineSound() {
      this.sound = new Howl({
        src: ["intro.m4a"]
      });
    },
    play() {
      const playButton = this.$el.querySelector("#start-button-big");
      this.$helpers.fadeOutAndHide(this, playButton);
      this.sound.play();
      this.tl.play();
    },
    pause() {
      this.sound.pause();
      this.tl.pause();
    },
    changeTitle(obj) {
      this.$helpers.changeTitle(this, obj);
    }
  }
};
</script>

<style lang="scss" scoped>
#start-button-big {
  transition: opacity 150ms ease-in;
  z-index: 9;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
  font-weight: 900;
}
</style>
