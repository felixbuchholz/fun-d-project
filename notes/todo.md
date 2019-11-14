## Visualization

1. Comparison of the three managers
2. Alpha in the force graph – reduce the time
3. Force alternatives:
   1. https://stackoverflow.com/a/56866373
   2. canvas
   3. Include the non-esg as just one blob / two blobs -> might make them too important -> solution: only outline
   4. visjs, cytoscapejs
   5. Get the "faster" force thing to work: **// import { manyBodyReuse } from "d3-force-reuse";**
   6. http://emptypipes.org/2015/02/18/slow_force_directed_graph/
   7. https://www.quora.com/Does-D3-js-work-efficiently-on-massive-amounts-of-data-200-million-rows-with-at-least-a-dozen-columns
   8. https://stardustjs.github.io/publications/eurovis2017-stardust.pdf
   9. http://tommykrueger.com/projects/d3tests/performance-test.php
   10. https://mango-is.com/blog/engineering/pre-render-d3-js-charts-at-server-side/
4. Tooltip

## Intro part

1. ~~Font~~
2. ~~Make the titles SEO friendly (array of titles – all in DOM)~~ **OR** -> Decision: SEO – All titles
3. ~~Create and destroy DOM elements~~
   1. ~~Only have the currently needed objects in place~~ -> Solution: Scale!
   2. ~~Make components for everything~~
      1. ~~Then have an array with everything~~ -> Three places: 1. Animation Controls 2. Element Wrapper 3. IntroTitles
         1. ~~And arrays inside of that when needed~~
   3. ~~Titles could be a component with props~~
   4. Good naming practice: Order or content oriented?
4. ~~Streamline repeating things:~~
   1. ~~On-screen titles~~
   2. ~~Objects~~
5. ~~Howler how to start at a certain place?~~
6. ~~Make titles appear / disappear without a function~~
7. Layering / positioning so elements are mostly accessible for u interaction

To Remove before production, if not used later:

1. vue-slider-component
2. Svg.js
3. \_for_reference_only

Check package size with font-awesome!
