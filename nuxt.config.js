export default {
  mode: "spa",
  // router: { base: "/fun-d-project/" },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@assets/scss/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    // { src: "~/plugins/svg" },
    { src: "~/plugins/anime" },
    { src: "~/plugins/helpers" },
    // { src: "~/plugins/resize" },
    { src: "~/plugins/vue-slider" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          //import whole set
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["fas"]
          }
          //import 2 icons from set
          // please note this is PRO set in this example,
          // you must have it in your node_modules to actually import
          // {
          //   set: "@fortawesome/pro-regular-svg-icons",
          //   icons: ["faAdjust", "faArchive"]
          // }
        ]
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
