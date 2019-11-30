<template>
  <div id="graph-control-drawer">
    <div class="col left">
      <!-- Processes: {{ processCounter }} -->
      <div class="year-label">Year</div>
      <div class="year-big">
        <input
          v-model.number="yearModel"
          type="number"
          step="1"
          class="sublte-input"
        />
      </div>
    </div>
    <div class="col center">
      <transition name="fade" mode="out-in">
        <button
          v-if="year > yearRange[0]"
          class="graph-control-button"
          @click="changeYear(-1)"
        >
          previous&nbsp;
          <fa class="fa-adjust" icon="backward" />
        </button>
      </transition>
      <div>
        <transition name="fade" mode="out-in">
          <button
            v-if="year < yearRange[1]"
            key="next"
            class="graph-control-button"
            @click="changeYear(1)"
          >
            <fa class="fa-adjust" icon="forward" />&nbsp;&nbsp;next
          </button>
          <button
            v-else
            key="reset"
            class="graph-control-button"
            @click="changeYear(yearRange[0])"
          >
            <fa class="fa-adjust" icon="undo" />&nbsp;&nbsp;reset
          </button>
        </transition>
      </div>
    </div>
    <div class="col right">
      <button class="graph-control-button">
        <fa class="fa-adjust" icon="percentage" />&nbsp;&nbsp;Percentages
        <!-- alt: percent -->
      </button>
      <button class="graph-control-button">
        <fa class="fa-adjust" icon="info" />&nbsp;Legend
        <!-- alt: info-circle -->
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: { 
    ...mapState({
      year: state => state.year.year,
      yearRange: state => state.year.yearRange,
      processCounter: state => state.progressBar.processCounter
    }),
    yearModel: {
      set(val) {
        if (val < this.yearRange[0]) {
        } else if (val > this.yearRange[1]) {
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
    }
  }
};
</script>

<style lang="scss" scoped></style>
