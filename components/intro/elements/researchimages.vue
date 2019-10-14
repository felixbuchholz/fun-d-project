<template>
  <div>
    <div id="research-images">
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
      <!-- <img
        class="info-overload zero-opacity"
        src="~/assets/img/wallstreetjournal.jpg"
      />
      <img class="info-overload zero-opacity" src="~/assets/img/bloomb.jpg" />
      <img class="info-overload zero-opacity" src="~/assets/img/bloomb2.jpg" />
      <img class="info-overload zero-opacity" src="~/assets/img/ft.jpg" />
      <img class="info-overload zero-opacity" src="~/assets/img/econom.jpg" />
      <img class="info-overload zero-opacity" src="~/assets/img/apple.jpg" />
      <img class="info-overload zero-opacity" src="~/assets/img/balancse.jpg" /> -->
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

<style lang="scss" scoped>
#research-images {
  position: absolute;
  top: 0;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) scale(1);
  width: 50%;
  height: 50%;
}
.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  border: 1px solid #888;
  border-radius: 4px;
}
.info-overload-image {
  position: absolute;
  width: 100%;
}
</style>
