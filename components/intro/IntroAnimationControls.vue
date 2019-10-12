<template>
  <div id="animation-controls">
    <!-- <button id="start-button-big" ref="centeredPlayButton" @click="play">
      Play Intro
    </button> -->
    <div id="animation-drawer-controls">
      <div id="drawer">
        <button @click="play">Play!</button>
        <button @click="pause">Pause!</button>
        <!-- <button @click="seek">Seek!</button> -->
        <input
          id="myRange"
          v-model.number="progress"
          type="range"
          step="0.001"
          min="0.0"
          max="100.0"
          class="slider"
          @input="sliderChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import { Howl } from "howler";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      progress: 90,
      isPlaying: false,
      currentTitle: { x: 0, y: 0 }
    };
  },
  computed: {
    ...mapState({
      globalTitle: state => state.timeline.currentTitle
    }),
    ...mapGetters({
      width: ["window/width"],
      height: ["window/height"]
    })
  },
  watch: {
    currentTitle: {
      deep: true,
      handler(change) {
        let newObject = {
          x: (change.x / 100) * this.width,
          y: (change.y / 100) * this.height
        };
        for (const prop in newObject) {
          if (newObject.hasOwnProperty(prop)) {
            if (newObject[prop] == this.globalTitle[prop]) {
              delete newObject[prop];
            }
          }
        }
        if (Object.keys(newObject).length > 0) {
          // console.log("send it to the mothership");
          this.changeTitle(newObject);
        }
      }
    }
  },
  mounted() {
    this.defineSound();
    this.defineTimeline();
    this.getStartedToWork();
    window.addEventListener("keydown", this.handleSpaceKeydown);
    // TODO: remove event listener if needed
    // setTimeout(() => {
    //   this.removeEventlistener();
    // }, 3000);
    // ? attach listener to different element?
    // console.log(this.$parent.$refs.introAnimation);
  },
  methods: {
    defineSound() {
      this.sound = new Howl({
        src: ["intro.m4a"],
        autoplay: false
      });
    },
    defineTimeline() {
      console.log("timeline is starting to define");
      const that = this;
      this.tl = anime.timeline({
        easing: "easeOutExpo",
        update: function(anim) {
          that.progress = that.tl.progress;
        },
        complete: function(anim) {
          that.reset();
        }
      });
      // Add children
      this.tl.add({
        targets: "#financial-future",
        scale: 1,
        duration: 1
      });
      this.tl.add({
        targets: "#financial-future",
        opacity: 1,
        scale: 1,
        duration: 2000,
        easing: "easeInOutSine"
      });
      this.tl.add(
        {
          targets: "#financial-future",
          opacity: 0,
          scale: 2,
          duration: 2000,
          easing: "easeInOutSine"
        },
        "+=700"
      );
      this.tl.add({
        targets: "#financial-future",
        scale: 0,
        duration: 1
      });
      4700;
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
      this.tl.add(
        {
          targets: "#house",
          opacity: 0,
          scale: 0,
          duration: 500,
          easing: "easeInOutExpo"
        },
        "+=5500"
      );
      this.tl.add(
        {
          targets: "#piggy",
          opacity: 0,
          scale: 0,
          duration: 500,
          easing: "easeInOutExpo"
        },
        "+=-250"
      );
      this.tl.add(
        {
          targets: "#nestegg",
          translateX: "50%",
          duration: 500,
          easing: "easeInOutExpo"
        },
        "+=-250"
      );
      this.tl.add(
        {
          targets: "#nestegg",
          opacity: 0, // TODO: Maybe have this on very low opacity
          duration: 500,
          easing: "easeInOutExpo"
        },
        "+=250"
      );
      this.tl.add(
        {
          targets: "#nestegg",
          translateX: "44%",
          translateY: "44%",
          scale: 12,
          duration: 450,
          easing: "easeInExpo"
        },
        "+=-550"
      );
      this.tl.add({
        targets: "#passivegraph",
        scale: 1,
        duration: 1
      });
      this.tl.add({
        targets: "#passivegraph",
        opacity: 1,
        duration: 700,
        easing: "easeInOutSine"
      });
      this.tl.add(
        {
          targets: "#passivegraphlinesactive",
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 2500
          // direction: "reverse"
          // begin: () => {
          //   console.log("begin");
          //   // console.log(anime.setDashoffset);
          // }
        },
        "-=500"
      );
      this.tl.add(
        {
          targets: "#passivegraphlinespassive",
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 2500
          // begin: () => {
          //   console.log("begin");
          //   // console.log(anime.setDashoffset);
          // }
        },
        "-=2500"
      );
      this.tl.add(
        {
          targets: "#passive-growth",
          scale: 1,
          duration: 1
        },
        "-=2500"
      );
      this.tl.add(
        {
          targets: that.currentTitle,
          y: -40,
          duration: 1
        },
        "-=2500"
      );
      this.tl.add(
        {
          targets: "#passive-growth",
          opacity: 1,
          duration: 800,
          easing: "easeInOutSine"
        },
        "-=2500"
      );
      this.tl.add(
        {
          targets: "#passive-growth",
          opacity: 0,
          duration: 2000,
          easing: "easeInOutSine"
        },
        "+=1500"
      );
      this.tl.add({
        targets: "#passive-growth",
        scale: 0,
        duration: 1
      });
      this.tl.add({
        targets: that.currentTitle,
        y: 0,
        duration: 1
      });
      // strokeDashoffset: [anime.setDashoffset, 0],
      this.tl.pause();
    },
    getStartedToWork() {
      setTimeout(() => {
        this.seek(this.progress);
      }, 200);
    },
    play() {
      this.$helpers.fadeOutAndHide(this.$refs.centeredPlayButton);
      this.sound.play();
      this.tl.play();
      this.isPlaying = true;
    },
    pause() {
      this.sound.pause();
      this.tl.pause();
      this.isPlaying = false;
    },
    seek(percent) {
      const miliseconds = this.tl.duration * (percent / 100);
      const seconds = miliseconds / 1000;
      this.sound.seek(seconds);
      this.tl.seek(miliseconds);
    },
    reset() {
      this.sound.fade(1, 0, 1000);
      setTimeout(() => {
        this.pause();
        this.sound.seek(0);
        this.sound.volume(1);
        this.$helpers.displayAndFadeIn(this.$refs.centeredPlayButton);
      }, 1000);
    },
    sliderChange() {
      // console.log(this.progress);
      const wasPlaying = this.isPlaying;
      // console.log(wasPlaying);
      if (this.isPlaying) {
        this.pause();
      }
      // console.log(wasPlaying);
      // TODO: Improve the throttling to on mouse donw / up
      this.seek(this.progress);
      if (wasPlaying) {
        setTimeout(() => {
          this.play();
        }, 500);
      }
    },
    changeTitle(obj) {
      this.$helpers.changeTitle(this, obj);
    },
    handleSpaceKeydown(event) {
      if (event.which == 32) {
        if (this.isPlaying) {
          this.pause();
        } else {
          this.play();
        }
      }
    },
    removeEventlistener() {
      window.removeEventListener("keydown", this.handleSpaceKeydown);
    }
    // progressFormatter(val) {
    //   return `${val} %`;
    // }
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
#animation-drawer-controls {
  width: 100%;
  height: 60px;
  overflow: hidden;
  position: absolute;
  bottom: 0px;
}
#animation-drawer-controls #drawer {
  transition: transform 200ms ease-in-out;
  transform: translateY(60px);
}
#animation-drawer-controls:hover {
  & #drawer {
    transform: translateY(13px);
  }
}
#drawer {
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: 100px 100px auto;
  align-items: center;
  padding: 10px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
