## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
# fun-d-project


# intro

> Testing svg.js to make an intro for the fun(d) project

## Documentation
Key folders and files:
- Store
-- This folder is the single source of truth. This is the vue plugin called "Vuex". This has always the current state. All components can send a mutation to the store to change a state elsewhere (which then comes from the store). 
-- For intro: store is used for keeping track what the size of the browser is (viewport), including the frame around it. The viewport height and width determine the sizes of the svg elements. We use one mutation: the width, height and frame. 

- Static
    -- Everything in this folder is available globally. Here is where data goes, or in this case the audio file.
- Components
-- This is where the action happens.
-- For intro: all animation controls are in one component. The timeline handling is not done from the store. That is because Anime.js needs the DOM to be ready. This is because the intro will be done from one component. 

- Assets
-- globally useful functions and files. One js file that has useful functions that can be used in different components. Also the SCSS and svg/images are here.

##### Within Components:
- IntroAnimationControls.vue
-- this has the timeline methods: playing, resetting and responsiveness (bottuns).
-- supports Howler (sound), Anime.js (animations)
-- connected to the Store
- Intro.vue:
-- Intro 



####Nuxt
Nuxt.js uses: 
- layouts: useally used to import styles
- pages: contains index.vue and all the different 'routes' like pages. In our case we want to have different sections, we would have multiple vue files in pages. Index is our top hierarchy. In index is the <template> tag, signifying that that is the html file that you plugin. Has to have ONE container element (div, g, list or other html standard).




