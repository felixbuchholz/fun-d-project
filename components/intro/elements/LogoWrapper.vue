<template>
  <div id="manager-logos">
    <div
      v-for="logo in logos"
      :id="`${logo.name}logo`"
      :key="`${logo.name}-logo`"
      class="manager-logos image-container zero-opacity"
      :style="
        `left:${logo.x}%; top: ${logo.y}%; width: ${
          logo.width
        }vw; transform: translateX(-50%) translateY(-50%) scale(${
          logo.initialScale ? logo.initialScale : 0
        }`
      "
    >
      <img class="logo" :src="`img/${logo.name}-logo.jpg`" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        { name: "blackrock", x: 25, y: 65, width: 10 },
        { name: "vanguard", x: 50, y: 65, width: 9 },
        { name: "statestreet", x: 75, y: 64, width: 7.5 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#manager-logos {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.image-container {
  position: absolute;
}
.logo {
  width: 100%;
}
</style>
