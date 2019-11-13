<template>
  <div
    id="research-images"
    style="transform: translateX(-50%) translateY(-50%) scale(0)"
  >
    <div
      v-for="(link, index) in links"
      :key="`researchImages ${index}`"
      class="image-container zero-opacity info-overload"
      :style="
        `transform: translateY(${-7 * (links.length - index)}%) scale(${1 -
          0.1 * (links.length - index)})`
      "
    >
      <img class="info-overload-image" :src="link" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        "img/bloomb.jpg",
        "img/econom.jpg",
        "img/balancse.jpg",
        "img/apple.jpg",
        "img/ft.jpg",
        "img/bloomb2.jpg"
      ]
    };
  }
};
</script>
