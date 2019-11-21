<template>
  <div class="drawing-canvas">
    <svg
      class="drawing-canvas-svg quick-center"
      width="600"
      height="300"
      style="opacity:0"
    >
      <path
        d="M41.37,0A54.06,54.06,0,0,0,4.21,38.74C2.72,45,2.49,51.93,5.78,57.43,9.71,64,17.68,67,25.22,68.43a85.3,85.3,0,0,0,55.16-8.15C87.26,56.67,94.3,51,94.62,43.22c.39-9.54-9.21-16-17.61-20.58-9.12-4.91-18.62-10-29-10.5S26.26,16.87,23.18,26.76"
      />
      <path
        d="M50.94,105.75l18.65,12.73c-2.89-5,2.06-11.17,7.45-13.24s11.59-2.18,16.32-5.48c5.68-4,7.61-11.28,10.56-17.54s9-12.58,15.69-10.91c5.35,1.34,9.16,7.45,14.66,7,7.12-.53,8.35-10.18,11-16.83,4-10.25,14.86-15.84,24.83-20.54l50.77-23.91"
      />
      <path d="M191,7.5,238.69,4A166.2,166.2,0,0,0,223.24,57.9" />
    </svg>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.quick-center {
  position: absolute;
  top: 60%;
  left: 60%;
  transform: scale(2.5);
}
path {
  stroke: #666;
  stroke-width: 2px;
  fill: none;
}
</style>
