<template>
  <div id="animation-controls">
    <button id="start-button-big" ref="centeredPlayButton" @click="playOrPause">
      <fa icon="play" class="correct-center" />
    </button>
    <div id="animation-drawer-controls">
      <div id="drawer">
        <button v-if="!isPlaying" @click="playOrPause">
          <fa icon="play" />&nbsp;&nbsp;Play
        </button>
        <button v-else @click="playOrPause">
          <fa icon="pause" />&nbsp;&nbsp;Pause
        </button>
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
        <div id="playback-time">{{ currentTimeForTimer }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import chroma from "chroma-js";
import { Howl } from "howler";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      progress: 0,
      isPlaying: false,
      currentTitle: { x: 0, y: 0, scale: 0, opacity: 0, title: "" },
      diversification: { diameterPercent: null },
      sharesLocal: [],
      currentTimeForTimer: "0:00",
      tl: {}
    };
  },
  computed: {
    ...mapState({
      globalTitle: state => state.timeline.currentTitle,
      circlePacking: state => state.diversification.circlePacking,
      sharesGlobal: state => state.diversification.shares
    }),
    ...mapGetters({
      width: ["window/width"],
      height: ["window/height"]
    })
    // currentTimeForTimer() {
    //   console.log(this.tl);
    //   if (this.tl) {
    //     const seconds = Math.floor(this.tl.currentTime);
    //     const minutes = Math.floor(this.tl.currentTime / 60);
    //     let remainder = seconds % 60;
    //     remainder = remainder < 10 ? "0" + remainder : remainder;
    //     const string = `${minutes}:${remainder}`;
    //     return string;
    //   } else {
    //     return "0:00";
    //   }
    // }
  },
  watch: {
    currentTitle: {
      deep: true,
      handler(change) {
        // console.log(change.title);
        let newObject = {
          x: (change.x / 100) * this.width,
          y: (change.y / 100) * this.height,
          scale: change.scale,
          opacity: change.opacity,
          // anime adds "0 "
          title: change.title.slice(0, -2)
        };
        for (const prop in newObject) {
          // eslint-disable-next-line no-prototype-builtins
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
    },
    diversification: {
      deep: true,
      handler(change) {
        // console.log(change.diameterPercent);
        this.$store.commit("diversification/CHANGE_CIRCLEPACKING", {
          diameterPercent: change.diameterPercent
        });
      }
    },
    sharesLocal: {
      deep: true,
      handler(change) {
        // console.log(change);
        const newShares = this.$helpers.getArrayOfObjectsCopy(change);
        this.$store.commit("diversification/CHANGE_SHARES", newShares);
      }
    }
  },
  mounted() {
    this.sharesLocal = this.$helpers.getArrayOfObjectsCopy(this.sharesGlobal);
    this.diversification.diameterPercent = this.circlePacking.diameterPercent;
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
      // TODO: remove later
      this.sound.volume(0);
    },
    defineTimeline() {
      // console.log("timeline is starting to define");
      const that = this;
      this.tl = anime.timeline({
        easing: "easeOutExpo",
        update: function() {
          that.progress = that.tl.progress;
        },
        complete: function() {
          that.reset();
        }
      });
      // Add children
      /*
      
          . .       . .    .       . .       . .       . .    .    
      .+'|=|`+. .+'|=|`+.=|`+. .+'|=|`+. .+'|=|`+. .+'|=|`+.=|`+. 
      |  | `+.| |.+' |  | `+.| |  | |  | |  | |  | |.+' |  | `+.| 
      |  | .         |  |      |  |=|  | |  |'. '.      |  |      
      `+.|=|`+.      |  |      |  | |  | |  | |  |      |  |      
      .    |  |      |  |      |  | |  | |  | |  |      |  |      
      |`+. |  |      |  |      |  | |  | |  | |  |      |  |      
      `+.|=|.+'      |.+'      `+.| |..| `+.| |.+'      |.+'      
                                                                  
      
      */
      //──── Financial future start ────────────────────────────────────────────────────────────

      // Setup & blend in title
      // Move
      this.tl.add({
        targets: that.currentTitle,
        y: 0,
        duration: 1
      });
      this.tl.add({
        targets: "#financial-future",
        scale: 1,
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 2000
        }
      });

      this.tl.add({
        targets: that.currentTitle,
        y: -40,
        duration: 500
      });

      // Pop in piggy bank
      this.tl.add({
        targets: "#piggy",
        opacity: 1,
        scale: 1,
        duration: 1200,
        easing: "easeInOutExpo"
      });
      // Pop in house
      this.tl.add(
        {
          targets: "#house",
          opacity: 1,
          scale: 1,
          duration: 1500,
          easing: "easeInOutExpo"
        },
        "+=0"
      );
      // Pop in nest egg
      this.tl.add(
        {
          targets: "#nestegg",
          opacity: 1,
          scale: 1,
          duration: 1500,
          easing: "easeInOutExpo"
        },
        "+=1000"
      );
      // Pop out house
      this.tl.add(
        {
          targets: "#house",
          opacity: 0,
          scale: 0,
          duration: 500,
          easing: "easeInOutExpo"
        },
        "+=3700"
      );
      // Prepare house for later
      this.tl.add({
        targets: "#house",
        translateX: "75%",
        duration: 1
      });
      // Pop out piggy bank
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
      // Move nest egg to the center
      this.tl.add(
        {
          targets: "#nestegg",
          translateX: "50%",
          duration: 500,
          easing: "easeInOutExpo"
        },
        "+=-250"
      );

      // Blow up and fade out nest egg
      this.tl.add(
        {
          targets: "#nestegg",
          opacity: 0, // TODO: Maybe have this on very low opacity
          duration: 500,
          easing: "easeInOutExpo"
        },
        "+=250"
      );
      // …
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
      // Blend out & clear title
      this.tl.add(
        {
          targets: "#financial-future",
          scale: 0,
          height: 0,
          duration: 1,
          delay: 500,
          opacity: {
            value: 0,
            delay: 0,
            duration: 500
          }
        },
        "-=500"
      );
      //──── Financial future end ──────────────────────────────────────────────────────────────

      //──── Passive - active graph start ──────────────────────────────────────────────────────
      // Blend in the comparison graph
      this.tl.add({
        targets: "#passivegraph",
        scale: 1,
        duration: 1,
        opacity: {
          value: 1,
          duration: 700,
          easing: "easeInOutSine"
        }
      });
      // Animate line graphs
      this.tl.add(
        {
          targets: ["#passivegraphlinesactive", "#passivegraphlinespassive"],
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 2500
        },
        "-=500"
      );
      // Setup & blend in title
      // Move
      this.tl.add({
        targets: that.currentTitle,
        y: -40,
        duration: 1
      });
      this.tl.add({
        targets: "#passive-growth",
        scale: 1,
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 2000
        }
      });
      // Blend out & clear title
      this.tl.add(
        {
          targets: "#passive-growth",
          scale: 0,
          height: 0,
          duration: 1,
          delay: 2000,
          opacity: {
            value: 0,
            delay: 0,
            duration: 2000
          }
        },
        "+=500"
      );
      // Blend out & clear the graph
      this.tl.add(
        {
          targets: "#passivegraph",
          opacity: 0,
          duration: 1000,
          easing: "easeInOutSine",
          scale: {
            value: 0,
            delay: 1000,
            duration: 1
          }
        },
        "-=1000"
      );
      //──── Passive & active graph end ────────────────────────────────────────────────────────

      //──── Research screenshots start ────────────────────────────────────────────────────────
      // Scale up container
      this.tl.add({
        targets: "#research-images",
        scale: 1,
        duration: 1
      });

      // Morphing time machine animation
      this.tl.add(
        {
          targets: ".info-overload",
          opacity: 1,
          duration: 200,
          delay: anime.stagger(75, { from: "last" }),
          easing: "easeInOutSine"
        },
        "+=400"
      );
      this.tl.add(
        {
          targets: ".info-overload",
          translateY: "+=27%",
          scale: "+=0.4",
          easing: "easeInOutSine",
          duration: 3200,
          delay: anime.stagger(600, { from: "last" })
        },
        "+=400"
      );
      this.tl.add(
        {
          targets: ".info-overload",
          opacity: 0,
          duration: 300,
          delay: anime.stagger(700, { from: "last" }),
          easing: "easeInOutSine"
        },
        "-=5000"
      );

      // Clear container
      this.tl.add({
        targets: "#research-images",
        scale: 0,
        duration: 1
      });

      //──── Research screenshots end ──────────────────────────────────────────────────────────

      //──── Index list start ─────────────────────────────────────────────────────────────

      // Setup & blend in title
      // Move
      this.tl.add({
        targets: that.currentTitle,
        y: -45,
        duration: 1
      });
      this.tl.add({
        targets: "#fund-concept",
        scale: 1,
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 2000
        }
      });
      // Bounce in second part of the title
      this.tl.add({
        targets: "#fund-concept-two",
        opacity: 1,
        scale: 1,
        duration: 600,
        easing: "easeOutBack"
      });

      this.tl.add(
        {
          targets: "#index-box",
          scale: 1,
          duration: 1
        },
        "-=2500"
      );

      this.tl.add({
        targets: "#index-box",
        opacity: 1,
        duration: 2000,
        easing: "easeInOutSine"
      });

      this.tl.add(
        {
          targets: "#index-list",
          translateY: "-50%",
          duration: 4000,
          easing: "easeInOutExpo"
        },
        "+=-2500"
      );
      this.tl.add({
        targets: "#index-box",
        scale: 0,
        opacity: 0,
        duration: 1000
      });
      // Blend out & clear title
      this.tl.add(
        {
          targets: "#fund-concept",
          scale: 0,
          height: 0,
          duration: 1,
          delay: 2000,
          opacity: {
            value: 0,
            delay: 0,
            duration: 1000
          }
        },
        "-=1000"
      );

      // Setup & blend in title
      // Move
      this.tl.add({
        targets: that.currentTitle,
        y: -0,
        duration: 1
      });
      this.tl.add({
        targets: "#why-pass-work",
        scale: 1,
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 2000
        }
      });

      this.tl.add({
        targets: that.currentTitle,
        y: -40,
        duration: 700
      });

      this.tl.add({
        targets: "#cheap-diversific",
        scale: 1,
        translateY: "25px",
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 2000
        }
      });

      this.tl.add({
        targets: "#diversific",
        scale: 1,
        translateY: "50px",
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 2000
        }
      });

      this.tl.add({
        targets: "#diversific",
        translateY: "0px",
        duration: 500
      });

      // Blend out & clear title
      this.tl.add(
        {
          targets: ["#cheap-diversific", "#why-pass-work"],
          scale: 0,
          height: 0,
          duration: 1,
          delay: 500,
          opacity: {
            value: 0,
            delay: 0,
            duration: 500
          }
        },
        "-=500"
      );

      //──── diversification start ───────────────────────────────────────────────────────────────────

      this.tl.add({
        targets: "#diversification-container",
        opacity: 1,
        scale: 1,
        duration: 200,
        easing: "easeOutBack"
      });

      this.tl.add(
        {
          targets: that.diversification,
          diameterPercent: 35,
          duration: 4000,
          easing: "linear"
        },
        "+=800"
      );
      this.tl.add(
        {
          targets: that.sharesLocal,
          amount: function(el, i) {
            return 1 + i * 0.1;
          },
          duration: 4000,
          easing: "easeInQuad"
        },
        "-=4000"
      );
      this.tl.add(
        {
          targets: that.diversification,
          diameterPercent: 38,
          duration: 3000,
          easing: "linear"
        },
        "+=0"
      );
      this.tl.add(
        {
          targets: that.sharesLocal,

          amount: function(el, i) {
            return 1 + i * 0.01;
          },
          duration: 3000,
          easing: "linear"
        },
        "-=3000"
      );
      this.tl.add(
        {
          targets: that.diversification,
          diameterPercent: 41,
          duration: 3000,
          easing: "linear"
        },
        "+=0"
      );
      this.tl.add(
        {
          targets: that.sharesLocal,
          amount: function(el, i) {
            return 1 + Math.pow(i, 4) * 0.00000001;
          },
          duration: 3000,
          easing: "easeOutQuad"
        },
        "-=3000"
      );

      this.tl.add(
        {
          targets: "#diversification-container",
          opacity: 0,
          duration: 800
        },
        "+=400"
      );

      // Blend out & clear title
      this.tl.add(
        {
          targets: "#diversific",
          scale: 0,
          height: 0,
          duration: 1,
          delay: 500,
          opacity: {
            value: 0,
            delay: 0,
            duration: 500
          }
        },
        "-=800"
      );

      this.tl.add({
        targets: "#diversification-container",
        scale: 0,
        duration: 1
      });
      // Preparation for come back
      this.tl.add({
        targets: that.diversification,
        diameterPercent: 25,
        duration: 1
      });

      // Get container out of the way
      this.tl.add({
        targets: "#diversification-container",
        opacity: 0,
        scale: 0,
        duration: 1
      });

      //──── diversification end ───────────────────────────────────────────────────────────────────

      //──── haystack start ───────────────────────────────────────────────────────────────────

      this.tl.add(
        {
          targets: "#haystack",
          opacity: 1,
          scale: 1,
          duration: 1000,
          easing: "easeInOutSine"
        },
        "+=500"
      );

      this.tl.add({
        targets: "#magnifier",
        opacity: 1,
        scale: 1,
        duration: 500,
        easing: "easeOutBounce"
      });
      var magnifierPath = anime.path("#magnifier-path");
      this.tl.add({
        targets: "#magnifier-mover",
        translateX: magnifierPath("x"),
        translateY: magnifierPath("y"),
        // rotate: magnifierPath("angle"),
        easing: "easeInOutQuad",
        duration: 4000
      });
      this.tl.add({
        targets: ".hay.needle",
        stroke: "#0000ff",
        easing: "easeInQuad",
        duration: 200
      });

      this.tl.add(
        {
          targets: "#magnifier",
          translateY: "125%",
          translateX: "-=40%",
          rotate: "300deg",
          duration: 900,
          easing: "easeInBack"
        },
        "+=900"
      );

      this.tl.add({
        targets: "#magnifier",
        opacity: 0,
        scale: 0,
        duration: 1
      });

      this.tl.add(
        {
          targets: ".hay",
          stroke: function() {
            return that.$helpers.getRandomColorHex();
          },
          easing: "easeInQuad",
          duration: 800
        },
        "+=200"
      );

      this.tl.add(
        {
          targets: "#haystack",
          scale: 0,
          opacity: 0,
          duration: 400,
          easing: "easeInBack"
        },
        "+=400"
      );

      this.tl.add(
        {
          targets: "#diversification-container",
          scale: 1,
          opacity: 1,
          duration: 400,
          easing: "easeOutBack"
        },
        "-=250"
      );

      // Setup & blend in title
      // Move
      this.tl.add({
        targets: that.currentTitle,
        y: -25,
        duration: 1
      });
      this.tl.add({
        targets: "#haystack-title",
        scale: 1,
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 2000
        }
      });

      this.tl.add(
        {
          targets: "#diversification-container",
          opacity: 0,
          duration: 500
        },
        "-=500"
      );

      this.tl.add({
        targets: "#diversification-container",
        scale: 0,
        duration: 1
      });

      // Blend out & clear title
      this.tl.add({
        targets: "#haystack-title",
        scale: 0,
        height: 0,
        duration: 1,
        delay: 1200,
        opacity: {
          value: 0,
          delay: 0,
          duration: 1200
        }
      });

      //──── haystack end ───────────────────────────────────────────────────────────────────

      //──── winner start ───────────────────────────────────────────────────────────────────

      // Setup & blend in title
      // Move
      this.tl.add({
        targets: that.currentTitle,
        y: -40,
        duration: 1
      });
      this.tl.add({
        targets: "#winners-pass",
        scale: 1,
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 2000
        }
      });

      this.tl.add(
        {
          targets: ".mgmt-house",
          opacity: 1,
          scale: 1,
          duration: 600,
          delay: anime.stagger(200, { from: "first" }),
          easing: "easeInOutQuad"
        },
        "+=200"
      );

      this.tl.add(
        {
          targets: ".manager-logos",
          opacity: 1,
          scale: 1,
          duration: 600,
          delay: anime.stagger(300, { from: "center" }),
          easing: "easeInOutQuad"
        },
        "-=200"
      );

      this.tl.add(
        {
          targets: ".manager-logos",
          opacity: 1,
          scale: 0.7,
          duration: 500,
          easing: "easeInOutQuad"
        },
        "+=700"
      );

      this.tl.add(
        {
          targets: "#blackrocklogo",
          left: "30%",
          top: "62%",
          duration: 700,
          easing: "easeInOutSine"
        },
        "-=500"
      );

      this.tl.add(
        {
          targets: "#vh",
          translateX: "30%",
          translateY: "31.5%",
          duration: 700,
          easing: "easeInOutSine"
        },
        "-=700"
      );

      this.tl.add(
        {
          targets: "#vanguardlogo",
          left: "30%",
          top: "70%",
          duration: 700,
          easing: "easeInOutSine"
        },
        "-=700"
      );

      this.tl.add(
        {
          targets: "#ssh",
          translateX: "36.5%",
          translateY: "45%",
          duration: 700,
          easing: "easeInOutSine"
        },
        "-=700"
      );

      this.tl.add(
        {
          targets: "#statestreetlogo",
          left: "30%",
          top: "80%",
          duration: 700,
          easing: "easeInOutSine"
        },
        "-=700"
      );

      this.tl.add({
        targets: "#winners-pass-two",
        scale: 1,
        height: "auto",
        translateY: "25px",
        duration: 1,
        opacity: {
          value: 1,
          duration: 2000
        }
      });

      // Blend out & clear title
      this.tl.add(
        {
          targets: ["#winners-pass", "#winners-pass-two"],
          scale: 0,
          height: 0,
          duration: 1,
          delay: 500,
          opacity: {
            value: 0,
            delay: 0,
            duration: 500
          }
        },
        "+=500"
      );
      // Setup title
      // Move
      this.tl.add({
        targets: that.currentTitle,
        x: 25,
        y: -120,
        duration: 1
      });

      this.tl.add({
        targets: "#equals",
        opacity: 1,
        scale: 0.8,
        duration: 400,
        easing: "easeOutBounce"
      });

      this.tl.add(
        {
          targets: "#house",
          opacity: 1,
          scale: 1,
          duration: 800,
          easing: "easeInOutExpo"
        },
        "-=200"
      );

      this.tl.add(
        {
          targets: "#household-equivalent",
          scale: 1,
          height: "auto",
          duration: 1,
          opacity: {
            value: 1,
            duration: 600
          }
        },
        "-=600"
      );

      this.tl.add(
        {
          targets: that.currentTitle,
          x: 25,
          y: 8,
          duration: 400,
          easing: "easeOutBack"
        },
        "-=200"
      );

      this.tl.add(
        {
          targets: [
            "#house",
            ".mgmt-house",
            ".manager-logos",
            "#equals",
            "#household-equivalent"
          ],
          opacity: 0,
          scale: 0,
          duration: 500,
          easing: "easeInOutExpo"
        },
        "+=2500"
      );
      //──── Winner end ────────────────────────────────────────────────────────────────────────

      //──── Fundblob scrolling start ──────────────────────────────────────────────────────────
      // Blend in the fundblob container
      this.tl.add({
        targets: "#all-funds-container",
        scale: 1,
        duration: 1
      });

      // Setup & blend in title
      // Move
      this.tl.add({
        targets: that.currentTitle,
        y: -40,
        x: 0,
        duration: 1
      });
      this.tl.add({
        targets: "#managing",
        scale: 1,
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 1000
        }
      });

      this.tl.add(
        {
          targets: "#all-funds-container",
          opacity: 1,
          duration: 500,
          easing: "easeInOutExpo"
        },
        "-=900"
      );

      this.tl.add(
        {
          targets: "#all-funds-mover",
          translateX: "-1000%",
          duration: 9000,
          easing: "easeInQuart"
        },
        "-=900"
      );

      this.tl.add(
        {
          targets: "#all-funds-container",
          opacity: 0,
          duration: 1000,
          easing: "easeInOutQuad"
        },
        "-=1000"
      );
      //──── Fund blob scrolling end ───────────────────────────────────────────────────────────

      this.tl.add({
        targets: "#managing",
        scale: 0,
        height: 0,
        duration: 1,
        delay: 500,
        opacity: {
          value: 0,
          delay: 0,
          duration: 500
        }
      });

      //──── Get to vote start ─────────────────────────────────────────────────────────────────

      // Setup & blend in title
      this.tl.add({
        targets: "#get-to-vote",
        scale: 1,
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 700
        }
      });

      this.tl.add(
        {
          targets: "#companycircle",
          opacity: 1,
          scale: 1,
          duration: 500,
          easing: "easeOutBounce"
        },
        "+=500"
      );

      this.tl.add({
        targets: "#arrow",
        scale: 1,
        opacity: 1,
        duration: 1
      });

      this.tl.add(
        {
          targets: "#agenda",
          opacity: 1,
          scale: 1,
          translateX: {
            value: "50%",
            delay: 200,
            duration: 800
          },
          duration: 1000,
          easing: "easeInQuad"
        },
        "+=500"
      );

      this.tl.add(
        {
          targets: ".arrow-line",
          strokeDashoffset: [anime.setDashoffset, 0],
          delay: anime.stagger(400, { from: "center" }),
          duration: 400,
          easing: "easeInQuad"
        },
        "-=400"
      );

      this.tl.add(
        {
          targets: ["#voteyes1", "#voteno1", "#voteno2"],
          translateX: "65%",
          scale: 1.2,
          opacity: 1,
          duration: 500,
          delay: anime.stagger(300),
          easing: "easeOutBack"
        },
        "+=500"
      );

      this.tl.add(
        {
          targets: [
            "#voteyes1",
            "#voteno1",
            "#voteno2",
            "#agenda",
            "#arrow",
            "#companycircle"
          ],
          scale: 0,
          opacity: 0,
          duration: 300,
          delay: anime.stagger(100),
          easing: "easeInQuad"
        },
        "+=3000"
      );

      // Blend out & clear title
      this.tl.add(
        {
          targets: "#get-to-vote",
          scale: 0,
          height: 0,
          duration: 1,
          delay: 500,
          opacity: {
            value: 0,
            delay: 0,
            duration: 500
          }
        },
        "-=400"
      );
      //──── Get to vote end ───────────────────────────────────────────────────────────────────

      //──── Big numbers start ─────────────────────────────────────────────────────────────────
      // Setup & blend in title
      // Move
      this.tl.add({
        targets: that.currentTitle,
        y: -40,
        duration: 1
      });
      this.tl.add({
        targets: "#share-of-comps",
        scale: 1,
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 2000
        }
      });

      // Scale up container
      this.tl.add({
        targets: "#big-numbers",
        scale: 1,
        duration: 1
      });

      this.tl.add({
        targets: "#big-s-and-p",
        opacity: 1,
        scale: 1,
        duration: 600,
        easing: "easeOutBack"
      });

      this.tl.add({
        targets: "#big-majority",
        scale: 1,
        duration: 1
      });

      this.tl.add(
        {
          targets: ".bm-elements",
          opacity: 1,
          scale: 1,
          duration: 600,
          delay: anime.stagger(800),
          easing: "easeOutQuad"
        },
        "+=1000"
      );

      // Blend out & clear the container
      this.tl.add(
        {
          targets: "#big-numbers div",
          opacity: 0,
          duration: 500,
          delay: anime.stagger(100),
          easing: "easeInOutSine",
          scale: {
            value: 0,
            delay: 2000,
            duration: 1
          }
        },
        "+=2500"
      );

      // Blend out & clear title
      this.tl.add(
        {
          targets: "#share-of-comps",
          scale: 0,
          height: 0,
          duration: 1,
          delay: 2000,
          opacity: {
            value: 0,
            delay: 0,
            duration: 2000
          }
        },
        "+=500"
      );
      //──── Big numbers end ───────────────────────────────────────────────────────────────────

      //──── Majority start ────────────────────────────────────────────────────────────────────
      // Setup & blend in title
      // Move
      this.tl.add({
        targets: that.currentTitle,
        y: -40,
        duration: 1
      });
      this.tl.add({
        targets: "#majority",
        scale: 1,
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 1000
        }
      });

      this.tl.add({
        targets: ".voteno",
        rotate: "-30deg",
        duration: 1
      });

      this.tl.add(
        {
          targets: "#smallslice",
          scale: 1,
          opacity: 1,
          translateY: "45%",
          duration: 500,
          easing: "easeInOutQuint"
        },
        "+= 300"
      );

      this.tl.add(
        {
          targets: ".voteno",
          scale: 1.2,
          opacity: 1,
          translateX: function(el, i) {
            return 26 + i * 3 + "%";
          },
          translateY: "60%",
          rotate: "0deg",
          duration: 300,
          delay: anime.stagger(100),
          easing: "easeInQuad"
        },
        "+=500"
      );

      this.tl.add(
        {
          targets: "#bigslice",
          scale: 1,
          opacity: 1,
          translateY: "45%",
          duration: 500,
          easing: "easeInOutQuint"
        },
        "+= 300"
      );

      this.tl.add(
        {
          targets: "#voteyes2",
          scale: 5,
          opacity: 1,
          translateX: "60%",
          translateY: "45%",
          duration: 500,
          easing: "easeOutBack"
        },
        "+= 600"
      );

      this.tl.add(
        {
          targets: ["#voteyes2", "#bigslice", "#smallslice", ".voteno"],
          scale: 0,
          opacity: 0,
          duration: 300,
          delay: anime.stagger(100, { from: "center" }),
          easing: "easeInQuad"
        },
        "+=3000"
      );

      // Blend out & clear title
      this.tl.add(
        {
          targets: "#majority",
          scale: 0,
          height: 0,
          duration: 1,
          delay: 1000,
          opacity: {
            value: 0,
            delay: 0,
            duration: 1000
          }
        },
        "-=500"
      );

      //──── Majority end ──────────────────────────────────────────────────────────────────────

      //──── THE END ───────────────────────────────────────────────────────────────────────────
      // Setup & blend in title
      // Move
      this.tl.add({
        targets: that.currentTitle,
        y: 0,
        duration: 1
      });
      this.tl.add({
        targets: "#how-using-influence",
        scale: 1,
        height: "auto",
        duration: 1,
        opacity: {
          value: 1,
          duration: 2000
        }
      });
      // Blend out & clear title
      this.tl.add(
        {
          targets: "#how-using-influence",
          scale: 0,
          height: 0,
          duration: 1,
          delay: 2000,
          opacity: {
            value: 0,
            delay: 0,
            duration: 2000
          }
        },
        "+=500"
      );

      this.tl.pause();
    },
    /*
    
          :::::::::: ::::    ::: :::::::::          ::::::::  ::::::::::      ::::::::::: :::::::::::   :::   :::   :::::::::: :::        ::::::::::: ::::    ::: :::::::::: 
          :+:        :+:+:   :+: :+:    :+:        :+:    :+: :+:                 :+:         :+:      :+:+: :+:+:  :+:        :+:            :+:     :+:+:   :+: :+:         
        +:+        :+:+:+  +:+ +:+    +:+        +:+    +:+ +:+                 +:+         +:+     +:+ +:+:+ +:+ +:+        +:+            +:+     :+:+:+  +:+ +:+          
        +#++:++#   +#+ +:+ +#+ +#+    +:+        +#+    +:+ :#::+::#            +#+         +#+     +#+  +:+  +#+ +#++:++#   +#+            +#+     +#+ +:+ +#+ +#++:++#      
      +#+        +#+  +#+#+# +#+    +#+        +#+    +#+ +#+                 +#+         +#+     +#+       +#+ +#+        +#+            +#+     +#+  +#+#+# +#+            
      #+#        #+#   #+#+# #+#    #+#        #+#    #+# #+#                 #+#         #+#     #+#       #+# #+#        #+#            #+#     #+#   #+#+# #+#             
    ########## ###    #### #########          ########  ###                 ###     ########### ###       ### ########## ########## ########### ###    #### ##########       
    
    */
    getStartedToWork() {
      setTimeout(() => {
        this.seek(this.progress);
      }, 200);
    },
    playOrPause() {
      // console.log(this.tl);

      if (!this.isPlaying) {
        this.$helpers.fadeOutAndHide(this.$refs.centeredPlayButton);
        this.sound.play();
        this.tl.play();
        this.isPlaying = true;
        const that = this;
        this.tickerForTimer = setInterval(function() {
          that.setTimer(that.tl.currentTime);
        }, 1000);
      } else {
        clearInterval(this.tickerForTimer);
        this.sound.pause();
        this.tl.pause();
        this.isPlaying = false;
        this.$helpers.displayAndFadeIn(this.$refs.centeredPlayButton);
      }
    },
    setTimer(millis) {
      if (this.tl) {
        const seconds = Math.floor(millis / 1000);
        const minutes = Math.floor(seconds / 60);
        let remainder = seconds % 60;
        remainder = remainder < 10 ? "0" + remainder : remainder;
        const string = `${minutes}:${remainder}`;
        this.currentTimeForTimer = string;
      } else {
        this.currentTimeForTimer = "0:00";
      }
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
      const wasPlaying = this.isPlaying;
      // console.log(wasPlaying);
      if (this.isPlaying) {
        this.playOrPause();
      }
      // console.log(wasPlaying);
      // TODO: Improve the throttling to on mouse donw / up
      this.seek(this.progress);
      this.setTimer(this.tl.currentTime);
      if (wasPlaying) {
        setTimeout(() => {
          this.playOrPause();
        }, 500);
      }
    },
    changeTitle(obj) {
      this.$helpers.changeTitle(this, obj);
    },
    handleSpaceKeydown(event) {
      if (event.which == 32) {
        this.playOrPause();
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
