<template>
  <!-- This needs to be optimized for this project -->
  <div id="controls" class="drawer-close">
    <div id="year-input" class="controls-input">
      <div class="regular year-label">Year:</div>
      <div class="cursor">
        <input
          v-model.number="yearModel"
          type="number"
          step="1"
          class="sublte-input"
        />
        <i></i>
      </div>
    </div>
    <div class="buttons">
      <!-- <button id="play" class="btn-first" @click="togglePausePlay">
        <Icon :icon="playing ? 'pause' : 'play'" />
      </button> -->
      <button id="previous" class="btn-first" @click="changeYear(-1)">
        <Icon icon="previous" />
      </button>
      <button id="next" class="btn-first" @click="changeYear(+1)">
        <Icon icon="next" />
      </button>
      <button id="reset" class="btn-first" @click="reset">
        <Icon icon="reset" />
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Icon from "~/components/ui/PlayIcons.vue";

export default {
  components: { Icon },
  data() {
    return {
      playing: false,
      yearInterval: {}
    };
  },
  computed: {
    ...mapState({
      year: state => state.year.year,
      yearRange: state => state.year.yearRange
    }),
    yearModel: {
      set(val) {
        if (val < this.yearRange[0]) {
          // this.$store.commit("counties/CHANGE_YEAR", 1999);
        } else if (val > this.yearRange[1]) {
          // this.$store.commit("counties/CHANGE_YEAR", 2015);
        } else {
          this.$store.commit("year/CHANGE_YEAR", val);
        }
      },
      get() {
        return this.year;
      }
    }
  },
  methods: {
    changeYear(val) {
      this.$store.commit("year/CHANGE_YEAR", val);
    },
    togglePausePlay() {
      // console.log(this.playing);
      if (this.playing) {
        this.pause();
      } else {
        this.play();
      }
    },
    pause() {
      clearInterval(this.yearInterval);
      this.playing = false;
    },
    play() {
      this.playing = true;
      this.yearInterval = window.setInterval(() => {
        if (this.yearIndex < 16) {
          this.changeYear(1);
        } else {
          clearInterval(this.yearInterval);
          this.playing = false;
        }
      }, 1400);
    },
    reset() {
      this.pause();
      this.changeYear(this.yearRange[0]);
    }
  }
};
// export default {
//
// };
</script>

<style lang="scss"></style>
