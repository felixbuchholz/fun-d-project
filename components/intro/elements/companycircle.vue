<template>
  <g>
    <circle cx="0" cy="0" r="50" :style="`stroke: none; fill: ${color};`" />
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
