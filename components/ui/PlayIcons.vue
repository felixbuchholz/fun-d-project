<template>
  <svg viewBox="0 0 12 12" class="play-btns">
    <g v-if="icon == 'pause'">
      <rect x="3" y="1" width="2" height="10" />
      <rect x="7" y="1" width="2" height="10" />
    </g>
    <g v-else>
      <path :d="icons[icon]" />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "play"
    }
  },
  data() {
    return {
      icons: {
        play:
          "M11,6.05A.05.05,0,0,0,11,6L3.09,1.37a.06.06,0,0,0-.06,0,.06.06,0,0,0,0,.06v9.14a.06.06,0,0,0,.09.06Z",
        next:
          "M11,2h-.9a0,0,0,0,0-.05,0V5.94L2.09,1.37a.06.06,0,0,0-.06,0,.06.06,0,0,0,0,.06v9.14a.06.06,0,0,0,.09.06L10,6.06V10a0,0,0,0,0,.05.05H11A0,0,0,0,0,11,10V2.05A0,0,0,0,0,11,2Z",
        previous:
          "M2.05,10H3A0,0,0,0,0,3,10V6.06l7.91,4.57H11a.06.06,0,0,0,0-.06V1.43a.06.06,0,0,0-.09-.06L3,5.94V2.05A0,0,0,0,0,3,2h-.9a0,0,0,0,0,0,0V10A0,0,0,0,0,2.05,10Z",
        reset:
          "M.53,6.39l1.74-.12a3.72,3.72,0,1,0,1.6-3.36l1,1.39L0,4.5,1.93.09l1,1.39A5.44,5.44,0,1,1,.53,6.39Z"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
svg {
  width: auto;
  height: 1em;
  max-width: 100%;
  max-height: 100%;
}
</style>
