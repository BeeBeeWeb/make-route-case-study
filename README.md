
## Case Study: Make route based on tickets

### Description:
John has bought a new house and found a diary of the previous house owner, describing a single trip. There were tickets inside with source and destination points, but without dates.
Help John find the original route of the trip.

### Task:
Write a function that accepts an array of tickets, where ticket has format [source: string, destination: string] and returns comma separated countries in order of visiting.

```javascript
function getRoute(tickets){
return 'USA,BRA,UAE,JPN,PHL'; // implement logic here
}
const result = getRoute([['JPN', 'PHL'], ['BRA', 'UAE'], ['USA', 'BRA'], ['UAE', 'JPN']]);
console.log(result);
```

### Solution:
1. We start by creating two map objects. One for storing the count of each source and destination and another one for mapping source as a key and its destination as value.
2. We loop through the tickets to update these two map objects
3. We find the start source of the journey by checking the `countMap` object. Start source and last destination will have count as 1 in the map. We also have map of sources with its destination. So we find key whose count is 1 and which also exists in the source map.
4. Then in the end we build the route by creating the array with start source as initial value. Then we can just go through `routeSourceMap` to find the next source and destination in the route. At the end last destination will not exist in the `routeSourceMap`, so that is our exit condition to exit from while loop.

---

### Getting Started 
`npm install`

### Running
`npm start`

### Testing
`npm test`