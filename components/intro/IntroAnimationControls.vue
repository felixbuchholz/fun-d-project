<template>
  <div id="animation-controls">
    <button id="start-button-big" ref="centeredPlayButton" @click="play">
      <fa icon="play" />&nbsp;Play Intro
    </button>
    <div id="animation-drawer-controls">
      <div id="drawer">
        <button @click="play"><fa icon="play" />&nbsp;Play</button>
        <button @click="pause"><fa icon="pause" />&nbsp;Pause</button>
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
import chroma from "chroma-js";
import { Howl } from "howler";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {
      progress: 85,
      isPlaying: false,
      currentTitle: { x: 0, y: 0 },
      diversification: { diameterPercent: null },
      sharesLocal: []
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
          scale: 1,
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
        duration: 1200,
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
        "+=0"
      );
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
      // TODO: check if this is right, should be passive-growth
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
        },
        "-=500"
      );
      this.tl.add(
        {
          targets: "#passivegraphlinespassive",
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutSine",
          duration: 2500
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
          duration: 1000,
          easing: "easeInOutSine"
        },
        "+=1500"
      );
      this.tl.add(
        {
          targets: "#passivegraph",
          opacity: 0,
          duration: 1000,
          easing: "easeInOutSine"
        },
        "-=1000"
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
      this.tl.add({
        targets: "#fund-concept",
        scale: 1,
        duration: 1
      });
      this.tl.add({
        targets: "#fund-concept",
        opacity: 1,
        scale: 1,
        duration: 2000,
        easing: "easeInOutSine"
      });
      this.tl.add({
        targets: "#fund-concept",
        scale: 0,
        duration: 100
      });

      this.tl.add(
        {
          targets: "#index-list",
          scale: 1,
          duration: 1
        },
        "-=2500"
      );
      this.tl.add(
        {
          targets: "#index-list",
          opacity: 1,
          scale: 1,
          duration: 2000,
          easing: "easeInOutSine"
        },
        "-=2500"
      );
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
        targets: "#index-list",
        scale: 0,
        duration: 1000
      });

      this.tl.add(
        {
          targets: "#fund-concept-two",
          scale: 1,
          duration: 1
        },
        "-=2000"
      );
      this.tl.add(
        {
          targets: "#fund-concept-two",
          opacity: 1,
          scale: 1,
          duration: 2000,
          easing: "easeInOutSine"
        },
        "-=2000"
      );
      this.tl.add({
        targets: "#fund-concept-two",
        scale: 0,
        duration: 1
      });

      this.tl.add({
        targets: "#why-pass-work",
        scale: 1,
        duration: 1
      });

      this.tl.add({
        targets: "#why-pass-work",
        opacity: 1,
        scale: 1,
        duration: 2000,
        easing: "easeInOutSine"
      });
      this.tl.add({
        targets: "#why-pass-work",
        scale: 0,
        duration: 1
      });
      this.tl.add({
        targets: "#cheap-diversific",
        scale: 1,
        duration: 1
      });
      this.tl.add({
        targets: that.currentTitle,
        y: -20,
        duration: 1
      });
      this.tl.add({
        targets: "#cheap-diversific",
        opacity: 1,
        scale: 1,
        duration: 2000,
        easing: "easeInOutSine"
      });
      this.tl.add({
        targets: "#cheap-diversific",
        scale: 0,
        duration: 1
      });

      this.tl.add({
        targets: "#diversific",
        scale: 1,
        duration: 1
      });

      this.tl.add({
        targets: that.currentTitle,
        y: -20,
        duration: 1
      });
      this.tl.add({
        targets: "#diversific",
        opacity: 1,
        scale: 1,
        duration: 2000,
        easing: "easeInOutSine"
      });
      this.tl.add({
        targets: "#diversific",
        scale: 0,
        duration: 1
      });

      //──── diversification start ───────────────────────────────────────────────────────────────────

      this.tl.add({
        targets: "#diversification-container",
        opacity: 1,
        duration: 800
      });

      this.tl.add(
        {
          targets: that.diversification,
          diameterPercent: 40,
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
          diameterPercent: 50,
          duration: 1500,
          easing: "linear"
        },
        "+=0"
      );
      this.tl.add(
        {
          targets: that.sharesLocal,

          amount: function(el, i) {
            return 1 + i * 0.02;
          },
          duration: 1500,
          easing: "linear"
        },
        "-=1500"
      );
      this.tl.add(
        {
          targets: that.diversification,
          diameterPercent: 60,
          duration: 3000,
          easing: "linear"
        },
        "+=0"
      );
      this.tl.add(
        {
          targets: that.sharesLocal,
          amount: function(el, i) {
            return 1 + Math.pow(i, 6) * 0.000000000001;
          },
          duration: 3000,
          easing: "easeInOutQuad"
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

      //──── diversification end ───────────────────────────────────────────────────────────────────

      //──── haystack start ───────────────────────────────────────────────────────────────────

      this.tl.add(
        {
          targets: "#haystack",
          opacity: 1,
          scale: 1,
          duration: 2000,
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
          duration: 200
        },
        "+=200"
      );

      this.tl.add({
        targets: "#haystack",
        scale: 0,
        opacity: 0,
        duration: 400,
        easing: "easeInBack"
      });

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

      this.tl.add({
        targets: "#haystack-title",
        scale: 1,
        duration: 1
      });

      this.tl.add(
        {
          targets: "#haystack-title",
          opacity: 1,
          duration: 2000,
          easing: "easeInOutSine"
        },
        "+=500"
      );
      this.tl.add(
        {
          targets: "#haystack-title",
          opacity: 0,
          duration: 500,
          easing: "easeInOutSine"
        },
        "+=500"
      );

      this.tl.add({
        targets: "#haystack-title",
        scale: 0,
        duration: 1
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

      //──── haystack end ───────────────────────────────────────────────────────────────────

      this.tl.add({
        targets: "#winners-pass",
        scale: 1,
        duration: 1
      });
      this.tl.add({
        targets: that.currentTitle,
        x: 0,
        y: -50,
        duration: 1
      });
      this.tl.add({
        targets: "#winners-pass",
        opacity: 1,
        scale: 1,
        duration: 2000,
        easing: "easeInOutSine"
      });
      this.tl.add({
        targets: "#winners-pass",
        scale: 0,
        duration: 1
      });

      // this.tl.add({
      //   targets: "#winners-pass-two",
      //   scale: 1,
      //   duration: 1
      // });
      // this.tl.add({
      //   targets: that.currentTitle,
      //   x: 0,
      //   y: -55,
      //   duration: 1
      // });
      // this.tl.add({
      //   targets: "#winners-pass-two",
      //   opacity: 1,
      //   scale: 1,
      //   duration: 2000,
      //   easing: "easeInOutSine"
      // });
      // this.tl.add({
      //   targets: "#winners-pass-two",
      //   scale: 0,
      //   duration: 1
      // });

      // this.tl.add({
      //   targets: "#managing",
      //   scale: 1,
      //   duration: 1
      // });

      // this.tl.add({
      //   targets: "#managing",
      //   opacity: 1,
      //   scale: 1,
      //   duration: 2000,
      //   easing: "easeInOutSine"
      // });
      // this.tl.add({
      //   targets: "#managing",
      //   scale: 0,
      //   duration: 1
      // });

      // this.tl.add({
      //   targets: "#get_to_vote",
      //   scale: 1,
      //   duration: 1
      // });
      // this.tl.add({
      //   targets: that.currentTitle,
      //   x: 0,
      //   y: -49,
      //   duration: 1
      // });
      // this.tl.add({
      //   targets: "#get_to_vote",
      //   opacity: 1,
      //   scale: 1,
      //   duration: 2000,
      //   easing: "easeInOutSine"
      // });
      // this.tl.add({
      //   targets: "#get_to_vote",
      //   scale: 0,
      //   duration: 1
      // });

      // this.tl.add({
      //   targets: "#share_of_comps",
      //   scale: 1,
      //   duration: 1
      // });
      // this.tl.add({
      //   targets: that.currentTitle,
      //   x: 0,
      //   y: -51,
      //   duration: 1
      // });
      // this.tl.add({
      //   targets: "#share_of_comps",
      //   opacity: 1,
      //   scale: 1,
      //   duration: 2000,
      //   easing: "easeInOutSine"
      // });
      // this.tl.add({
      //   targets: "#share_of_comps",
      //   scale: 0,
      //   duration: 1
      // });

      // this.tl.add({
      //   targets: "#how_using_influence",
      //   scale: 1,
      //   duration: 1
      // });
      // this.tl.add({
      //   targets: that.currentTitle,
      //   x: 0,
      //   y: -50,
      //   duration: 1
      // });
      // this.tl.add({
      //   targets: "#how_using_influence",
      //   opacity: 1,
      //   scale: 1,
      //   duration: 2000,
      //   easing: "easeInOutSine"
      // });
      // this.tl.add({
      //   targets: "#how_using_influence",
      //   scale: 0,
      //   duration: 1
      // });

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
