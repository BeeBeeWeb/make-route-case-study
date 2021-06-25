
/**
 * @function getRoute - Make route based on tickets
 * @param {Array.<Array.<string>>} tickets - [[source: string, destination: string]]
 * @returns {string} route
 */
function getRoute(tickets) {
    // create map to track the count of source and destinations.
    let countMap = {};
    // create map of source as a key and destination as value {[source]: [dest]}
    let routeSourceMap = {};

    // go through each ticket
    tickets.forEach((tkt) => {
        // Array destructuring to get src and dest.
        const [src, dest] = tkt;

        // update `countMap` with src and dest counts.
        // initiate count to 0 || previous count value
        let count = countMap[src] || 0;
        countMap[src] = count + 1;

        // do same for dest
        count = countMap[dest] || 0;
        countMap[dest] = count + 1;

        routeSourceMap[src] = dest;
    });

    // find start `source` i.e source where journey began
    // count for start `source` will be always be 1
    let start = '';
    Object.keys(countMap).forEach(key => {
        if (countMap[key] === 1 && routeSourceMap[key]) {
            start = key;
        }
    });

    // build the route string
    let route = [start];
    let flag = routeSourceMap[start] !== undefined;
    while (flag) {
        route.push(routeSourceMap[start]);
        start = routeSourceMap[start];
        flag = routeSourceMap[start] !== undefined;
    }

    return route.toString();
}

const result = getRoute([["JPN", "PHL"], ["BRA", "UAE"], ["USA", "BRA"], ["UAE", "JPN"]]);
console.log(result);

module.exports = getRoute;