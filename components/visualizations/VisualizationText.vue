<template>
  <div class="scrolly-telling-text">
    <Scrollama @step-enter="stepEnterHandler">
      <div class="margin-scrollama-text">CONTAINER FOR LLAMA</div>
      <div class="margin-scrollama-text">CONTAINER FOR LLAMA</div>
      <div class="margin-scrollama-text">CONTAINER FOR LLAMA</div>
    </Scrollama>
  </div>
</template>
<script>
export default {
  methods: {
    stepEnterHandler(event) {
      console.log(event);
      if (event.index == 1) {
        this.$store.commit("proposals/SET_ACTIVE_CATEGORIES", ["soc"]);
      } else if (event.index == 2) {
        this.$store.commit("proposals/SET_ACTIVE_CATEGORIES", [
          "env",
          "profit"
        ]);
      }
    }
  }
};
</script>
