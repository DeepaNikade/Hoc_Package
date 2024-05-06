# array-toolbox

A collection of useful higher-order functions for manipulating arrays in JavaScript.

## Installation

You can install this package via npm:

```bash
npm install array-toolbox
```

## Usage
```
const arrayToolbox = require('array-toolbox');

// Example usage of functions
const arr = [1, 2, 3, 4, 5];

console.log(arrayToolbox.sum(arr)); // Output: 15
console.log(arrayToolbox.unique(arr)); // Output: [1, 2, 3, 4, 5]
console.log(arrayToolbox.flatten([[1, 2], [3, 4], [5]])); // Output: [1, 2, 3, 4, 5]



```


# Functions
## sum(arr)
Calculates the sum of all elements in the array.

## unique(arr)
Returns a new array with only unique elements from the input array.

## flatten(arr)
Flattens a nested array into a single-level array.

## sortByKey(arr, key)
Sorts an array of objects by the specified key.

## groupBy(arr, criterion)
Groups elements of an array based on a given criterion.

## filterBy(arr, criterion)
Filters elements of an array based on a given criterion.

## partition(arr, predicate)
Partitions an array into two arrays based on a given predicate.

## shuffle(arr)
Randomly shuffles the elements of an array.

## chunk(arr, size)
Splits an array into chunks of a specified size.

## zip(...arrays)
Combines multiple arrays into a single array of tuples.