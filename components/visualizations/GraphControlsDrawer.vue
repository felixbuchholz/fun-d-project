<template>
  <div id="graph-control-drawer">
    <div class="col left">
      <!-- Processes: {{ processCounter }} -->
      <div class="year-label">{{ yearLabel }}</div>
      <div v-if="!useYearRange" class="year-big">
        <input
          v-model.number="yearModel"
          type="number"
          step="1"
          class="subtle-input"
        />
      </div>
      <div v-else class="year-big">
        {{ currentYearRange[0] }} – {{ currentYearRange[1] }}
      </div>
    </div>
    <div class="col center">
      <div
        v-if="!useYearRange && activateYearButtons"
        class="change-year-buttons"
      >
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
    </div>
    <div class="col right">
      <!-- <div v-if="!useYearRange" class="legend-and-percentages"> -->
      <div class="legend-and-percentages">
        <div class="toggle-passed">
          <label>Filter passed proposals</label
          ><toggle-button
            v-model="isPassedFilterActiveModel"
            :labels="{ checked: 'Only passed', unchecked: 'All proposals' }"
            :width="90"
            :height="26"
            :css-colors="true"
            :margin="5"
          />
        </div>
        <!-- Percentages and legend buttons -->
        <!-- <button class="graph-control-button">
          <fa class="fa-adjust" icon="percentage" />&nbsp;&nbsp;Percentages
        </button>
        <button class="graph-control-button">
          <fa class="fa-adjust" icon="info" />&nbsp;Legend
        </button> -->
        <!-- alt: percent -->
        <!-- alt: info-circle -->
      </div>
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
      currentYearRange: state => state.year.currentYearRange,
      useYearRange: state => state.year.useYearRange,
      activateYearButtons: state => state.year.activateYearButtons,
      processCounter: state => state.progressBar.processCounter,
      isPassedFilterActive: state => state.proposals.isPassedFilterActive
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
    },
    yearLabel() {
      return this.useYearRange ? "Years" : "Year";
    },
    isPassedFilterActiveModel: {
      set(val) {
        this.$store.commit("proposals/SET_IS_PASSED_FILTER_ACTIVE", val);
      },
      get() {
        return this.isPassedFilterActive;
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
