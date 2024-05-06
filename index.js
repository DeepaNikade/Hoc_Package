
const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);

const unique = (arr) => [...new Set(arr)];

const flatten = (arr) => arr.flat(Infinity);

const sortByKey = (arr, key) => arr.slice().sort((a, b) => a[key] - b[key]);

const groupBy = (arr, criterion) =>
  arr.reduce((acc, obj) => {
    const key = criterion(obj);
    acc[key] = acc[key] || [];
    acc[key].push(obj);
    return acc;
  }, {});

const filterBy = (arr, criterion) => arr.filter(criterion);

const partition = (arr, predicate) =>
  arr.reduce(
    (acc, curr) => {
      acc[predicate(curr) ? 0 : 1].push(curr);
      return acc;
    },
    [[], []]
  );

const shuffle = (arr) => arr.sort(() => Math.random() - 0.5);

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

const zip = (...arrays) => arrays[0].map((_, i) => arrays.map((array) => array[i]));

module.exports = {
  sum,
  unique,
  flatten,
  sortByKey,
  groupBy,
  filterBy,
  partition,
  shuffle,
  chunk,
  zip,
};
