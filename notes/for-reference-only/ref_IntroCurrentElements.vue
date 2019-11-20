<template>
  <g>
    <ElementWrapper />
  </g>
</template>

<script>
import { mapGetters } from "vuex";

import ElementWrapper from "~/components/intro/elements/ElementWrapper.vue";

export default {
  components: {
    ElementWrapper
  },
  computed: {
    ...mapGetters({
      width: ["window/width"],
      height: ["window/height"]
    })
  }
};
</script>

<style lang="scss" scoped></style>
