import chroma from "chroma-js";

export default {
  // https://stackoverflow.com/a/7178381
  // love this guy!
  findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  },
  findWith2Attrs(array, attr, value, attr2, value2) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value && array[i][attr2] === value2) {
        return i;
      }
    }
    return -1;
  },
  getViewportSize() {
    var e = window;
    var a = "inner";
    if (!("innerWidth" in window)) {
      a = "client";
      e = document.documentElement || document.body;
    }
    return { width: e[a + "Width"], height: e[a + "Height"] };
  },
  changeTitle(that, obj) {
    that.$store.commit("timeline/CHANGE_CURRENT_TITLE", obj);
  },
  fadeOutAndHide(el, time = 150) {
    el.classList.add("zero-opacity");
    setTimeout(() => {
      el.classList.add("hidden");
    }, time);
  },
  displayAndFadeIn(el, time = 150) {
    // console.log("fade in");
    el.classList.remove("hidden");
    setTimeout(() => {
      el.classList.remove("zero-opacity");
    }, time);
  },
  displayOrHideProgressBar(switcher) {
    const progressBar = document.querySelector("#progress-modal");
    switch (switcher) {
      case "display":
        this.displayAndFadeIn(progressBar, 0);
        break;
      case "hide":
        this.fadeOutAndHide(progressBar, 300);
        break;
    }
  },
  getArrayOfObjectsCopy(array) {
    // const newArray = array.map((x, i) => Object.assign({ index: i }, x));
    const newArray = JSON.parse(JSON.stringify(array));
    // let newArray = []
    // for (const element of array.slice(0)) {
    //   let newObject = {};
    //   for (const key in element) {
    //     if (element.hasOwnProperty(key)) {
    //       newObject[key] = element[key];
    //     }
    //   }
    //   newArray.push(newObject);
    // }
    return newArray;
  },
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },

  // if need to change colors
  getRandomColorHex() {
    const random = chroma.hsl(
      this.getRandomArbitrary(0, 360),
      this.getRandomArbitrary(0.7, 1),
      this.getRandomArbitrary(0.6, 0.9)
    );
    return chroma(random).hex();
  }
};
