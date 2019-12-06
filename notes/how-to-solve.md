# How to solve:

## Different logical combinations of conditions:

```js
// My own old way to do it:
// Check if proposal matches all specific filters
// console.log(x[state.proposalFilter.prop]);
const matchResults = [];
// console.log(state.proposalFilter);
for (const condition of state.proposalFilter.array) {
  // console.log(condition, condition.prop, x[condition.prop]);
  const matchesCondition = x[condition.prop]
    .toLowerCase()
    .includes(condition.val.toLowerCase());
  matchResults.push(matchesCondition);
}
// Different logical combinations
let match = false;
if (state.proposalFilter.logic == "and") {
  match = matchResults.every(x => x == true);
} else if (state.proposalFilter.logic == "or") {
  match = matchResults.includes(true);
}

return match;
```

Versus:

```js
const match = searchjs.matchObject(x, state.proposalFilter);
```

In the future:
http://nytimes.github.io/pourover/

## Do the outlines and mapping for distinct activism

- add a toggle variable to see if we are at that state
- if we are at that state add a class and then add classes according to the four cases
  - 1. passive (maybe exclude these, we are doing a zoom-in),
  - 2. active with the pack (should stay filled)
  - 3. active against the pack but with management (filled with darker outline)
  - 4. active against the management and against the pack (star or alternatively: different shape, bigger, differently colored outline)
    - technically: make the getClass name a function and pass the node, or compute the class on the data
    - In scss do a mapping of the colors and do classes with the needed properties accordingly
    - technically: include the different shape with v-if … else

## Collect shareholder issues over companies:

### Description of the process

1. Collect the top 10 companies with ESG-proposals (maybe restrict to sg/p, because of a lot of company-specific proposals in gg)
2. For each company compare the amount of proposals in different categories, find the category with the most matches
3. For each company find the first circle that matches the company and its most counted category.
4. Make that circle the companies’ center and move all the circles of the companies towards it
5. Re-arrange all of the companies by some ordering (amount of proposals for example)

### How to do it in code

1. Get the top 10
   1. d3array group by company sort by a[1].length - b[1].length **done**
2. Temporarily map and reduce (?) by category, possible to use d3array group again or filter by the 3 categories
3. Find the right circle in a similar way to what we did in ForceGraph _this.\$helpers.findWith2Attrs()_ It’s coordinates will be the center for index of that company
4. Make all the other nodes part of the exit simulate() with new centers, remove the exits

   1. For the centers you could:
      1. Either change the x-force part:
         ```javascript
         d3.x(function(d) {
           if (d.issue == "exit") {
             return that.centers[0].xN;
           }
           const x1 = that.centers[that.getIndexByIssue(d.issue)].x1;
           const x2 = that.centers[that.getIndexByIssue(d.issue)].x2;
           return d.meanActivist > 0.5 ? x2 : x1;
         });
         ```
      2. Or make a new simulate funtion
      3. Or a new initGraphOnUpdateFunction
   2. And you probably want to make a new centers getter (you could use a currentGetterName as a switch)
      1. extending the current centers to another condition is also a possibility

5. Find a way to distribute most equally over an area for x amount of centers (voronoi?)
6. Display the company names!
