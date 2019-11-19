<template>
    <div>
        <h1>Three passive elephants in the room </h1>
        <h3> Analyzing proxy voting patterns of the world’s largest financial shareholders </h3>
        <p></p>
    </div>    
</template>


<script>
// pligin from vuex, to access variables in store to make sure they are consistent across all files. 
import { mapState } from "vuex";

export default {
  components: {
  },
  data() {
    return {
      titles: [
      ]
    };
  },
  computed: {
      // connected to store, what handles global states, there is a JS file where data lives that is static. E.g. in window file,
      // to organize width and height. 
    ...mapState({
      title: state => state.timeline.currentTitle
    })
  }
};
</script>