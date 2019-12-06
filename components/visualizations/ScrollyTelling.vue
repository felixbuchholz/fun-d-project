<template>
  <div class="scrolly-telling-section">
    <div id="scrolly-telling-1-container">
      <VisualizationText />
      <ForceGraphGroup />
    </div>
  </div>
</template>

<script>
import ForceGraphGroup from "~/components/visualizations/ForceGraphGroup.vue";
import VisualizationText from "~/components/visualizations/VisualizationText.vue";
export default {
  components: {
    ForceGraphGroup,
    VisualizationText
  }
};
</script>

<style lang="scss" scoped></style>
