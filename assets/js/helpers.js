import chroma from "chroma-js";

export default {
  getViewportSize() {
    var e = window;
    var a = "inner";
    if (!("innerWidth" in window)) {
      a = "client";
      e = document.documentElement || document.body;
    }
    return { width: e[a + "Width"], height: e[a + "Height"] };
  },
  resize(that) {
    that.$store.commit("window/CHANGE_WINDOW", {
      property: "height",
      value: that.$helpers.getViewportSize().height
    });
    that.$store.commit("window/CHANGE_WINDOW", {
      property: "width",
      value: that.$helpers.getViewportSize().width
    });
  },
  changeTitle(that, obj) {
    that.$store.commit("timeline/CHANGE_CURRENT_TITLE", obj);
  },
  fadeOutAndHide(el) {
    el.classList.add("zero-opacity");
    setTimeout(() => {
      el.classList.add("hidden");
    }, 150);
  },
  displayAndFadeIn(el) {
    el.classList.remove("hidden");
    setTimeout(() => {
      el.classList.remove("zero-opacity");
    }, 150);
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
  getRandomColorHex() {
    const random = chroma.hsl(
      this.getRandomArbitrary(0, 360),
      this.getRandomArbitrary(0.7, 1),
      this.getRandomArbitrary(0.6, 0.9)
    );
    return chroma(random).hex();
  }
};
