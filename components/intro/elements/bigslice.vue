<template>
  <g>
    <circle class="a" cx="50.5" cy="50.5" r="50" :style="`stroke: ${color}`" />
    <path
      d="M50-.49V49l49.18-5.11A50,50,0,0,0,50-.49Z"
      transform="translate(1 1)"
      :style="`fill: ${color}`"
    />
  </g>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      color: state => state.diversification.companyColor
    })
  }
};
</script>

<style lang="scss" scoped>
path {
  stroke-width: 5px;
  stroke-linejoin: round;
}
circle {
  fill: none;
  stroke-width: 5px;
  stroke-linecap: round;
}
</style>
