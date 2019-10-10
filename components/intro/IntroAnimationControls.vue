<template>
  <div id="animation-controls">
    <div class="drawer">
      <button @click="play">Play!</button>
      <button @click="pause">Pause!</button>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import { Howl } from "howler";
// import { mapState } from "vuex";

export default {
  computed: {
    // ...mapState({
    //   tl: state => state.timeline.tl,
    //   sound: state => state.timeline.sound
    // })
  },
  mounted() {
    this.defineSound();
    this.defineTimeline();
  },
  methods: {
    defineSound() {
      this.sound = new Howl({
        src: ["intro.m4a"]
      });
    },
    defineTimeline() {
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
          easing: "easeInOutSine"
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
          targets: "#nest-egg",
          opacity: 1,
          scale: 1,
          duration: 1500,
          easing: "easeInOutExpo"
        },
        "+=3500"
      );
      this.tl.pause();
    },
    play() {
      this.sound.play();
      this.tl.play();
    },
    pause() {
      this.sound.pause();
      this.tl.pause();
    }
  }
};
</script>

<style lang="scss" scoped></style>
