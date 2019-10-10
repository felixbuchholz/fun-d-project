<template>
  <g class="zero-opacity">
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle">
      {{ title }}
    </text>
  </g>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default:
        "Sorry, something went wrong. Please check if props are passed to child component: 'IntroTitles.vue'"
    }
  },
  computed: {
    parsedTitle() {
      return this.title;
    }
  }
};
</script>

<style lang="scss" scoped></style>
