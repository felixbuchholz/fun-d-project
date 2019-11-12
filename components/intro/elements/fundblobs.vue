<template>
  <div id="all-funds-container" class="zero-opacity">
    <div id="all-funds-mover" :style="'transform: translateX(40%);'">
      <div v-for="(blob, index) in blobArray" :key="`blob-${index}`">
        <fundblob
          :num-of-circles="blob.numberOfCircles"
          :variation="blob.variation"
          :diameter="blob.diameter"
          :padding="blob.padding"
        />
      </div>
    </div>
  </div>
</template>

<script>
import fundblob from "~/components/intro/elements/fundblob.vue";
import { mapGetters } from "vuex";

export default {
  components: { fundblob },
  data() {
    return { numberOfBlobs: 100 };
  },
  computed: {
    ...mapGetters({
      width: ["window/width"],
      height: ["window/height"]
    }),
    blobArray() {
      const array = [...Array(this.numberOfBlobs)].map(() => {
        return {
          numOfCircles: this.rand(200, 1000),
          variation: [this.rand(1, 100), this.rand(1, 100)],
          diameter: this.rand(50, this.height * 0.3),
          padding: this.rand(2, 5)
        };
      });
      return array;
    }
  },
  methods: {
    rand(min, max) {
      return this.$helpers.getRandomArbitrary(min, max);
    }
  }
};
</script>

<style lang="scss">
#all-funds-container {
  // background: gray;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  display: flex;
  width: 100%;
  height: auto;
  overflow: hidden;
}
#all-funds-mover {
  align-items: center;
  display: flex;
  width: 100%;
}
</style>
