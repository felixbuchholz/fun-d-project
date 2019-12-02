## 3rd Chapter
- Specific companies with interesting proposals (amazon), 
  - Amazon has been targeted by their own employees

## Show the prev / next button only after the three categories are introduced

## Tooltip – done
- Use the item description as a title
- Use resolution only for filtering
- Add a highlight for the other two managers on hover 
  - Create proposal ID in python

## Drawing / restructuring over different aspects

- Social: **Gun violence** issues: 2018 / 2019 (Walmart, Sturm & Roger [these are in the funds]): filter by: *weapon related*
  - Board diversity!
  - All three vote activist
- Social: **Board diversity** (also outside of the public realm – lobbying)
- Environmental: **2 degree goal** (Exxon or all the oil companies)
- Good governance: **Compensation** (we can look at executive pay)
- Amazon: 2012-13-14-15 political contribution proposals


## Design
- How to show multiple years: use the vertical axis – only relevant years with a label. 
- Only weapons 

## Scrolly intro
1. first screen: example circles on the canvas
   
## UI
1. Add feedback (loading animation) to the previous and next buttons
2. When the distinct outlines are removed there is no transition for some reason
3. Fix tooltip is scrolling with the text.
4. Reset scrolly telling if the processes freeze
5. Scrolly telling feedback: come up with the right conditions, standardize them and move the progressBarFade in to before the start of the calculcation
6. 

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
5. Best solution for the node animation:
   1. From year to year: just add / remove circles to the right places

## Tooltip:

1. Get closest point:

```js
 mouseoverArea({ offsetX }) {
      this.showLabel = true;
      if (this.setShown != 1 && this.pointsArea[1].length > 0) {
        const x = offsetX - this.margin.left;
        const closestPoint = this.getClosestPoint(x);
        if (this.lastHoverPoint.index !== closestPoint.index) {
          const point = this.pointsArea[1][closestPoint.index];
          this.paths.selector = this.createValueSelector([point]);
          this.$emit(
            "mouseOver",
            this.myTooltip(this.filteredData[closestPoint.index])
          );
          this.lastHoverPoint = closestPoint;
        }
      }
    },
    getClosestPoint(x) {
      return this.pointsArea[1]
        .map((point, index) => ({
          x: point.x,
          diff: Math.abs(point.x - x),
          index
        }))
        .reduce((memo, val) => (memo.diff < val.diff ? memo : val));
    },
```

## Intro part

1. Adjust opacity of colors! – adapt opacity to hue? How to do it? Color scale?
2. 1. ~~Font~~
3. ~~Make the titles SEO friendly (array of titles – all in DOM)~~ **OR** -> Decision: SEO – All titles
4. ~~Create and destroy DOM elements~~
   1. ~~Only have the currently needed objects in place~~ -> Solution: Scale!
   2. ~~Make components for everything~~
      1. ~~Then have an array with everything~~ -> Three places: 1. Animation Controls 2. Element Wrapper 3. IntroTitles
         1. ~~And arrays inside of that when needed~~
   3. ~~Titles could be a component with props~~
   4. Good naming practice: Order or content oriented?
5. ~~Streamline repeating things:~~
   1. ~~On-screen titles~~
   2. ~~Objects~~
6. ~~Howler how to start at a certain place?~~
7. ~~Make titles appear / disappear without a function~~
8. Layering / positioning so elements are mostly accessible for u interaction

To Remove before production, if not used later:

1. vue-slider-component
2. Svg.js
3. \_for_reference_only
4. Controls component

Check package size with font-awesome!
