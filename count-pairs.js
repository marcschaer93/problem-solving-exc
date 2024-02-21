// add whatever parameters you deem necessary
// function countPairs(arr, num) {
//   let first = 0;
//   let second = 1;

//   let count = 0;

//   while (first < arr.length) {
//     if (arr[first] === num) {
//       count++;
//       first++;
//     }
//     if (arr[first] + arr[second] === num) {
//       count++;
//       first++;
//     }
//     if (second === arr.length) {
//       first++;
//       second = first;
//     }
//     second++;
//   }
//   return count;
// }

// console.log(countPairs([3, 1, 5, 4, 2], 6)); // 2 (1,5 and 2,4)
// console.log(countPairs([10, 4, 8, 2, 6, 0], 10)); // 3 (2,8, 4,6, 10,0)
// console.log(countPairs([4, 6, 2, 7], 10)); // 1 (4,6)
// console.log(countPairs([1, 2, 3, 4, 5], 10)); // 0
// console.log(countPairs([1, 2, 3, 4, 5], -3)); // 0
// console.log(countPairs([0, -4], -4)); // 1
// console.log(countPairs([1, 2, 3, 0, -1, -2], 0)); // 2

function countPairs(arr, target) {
  let seen = new Set();
  let count = 0;

  for (let number of arr) {
    let complement = target - number;
    if (seen.has(complement)) {
      count++;
    }
    seen.add(number);
  }

  return count;
}

console.log(countPairs([3, 1, 5, 4, 2], 6)); // 2
console.log(countPairs([10, 4, 8, 2, 6, 0], 10)); // 3
console.log(countPairs([4, 6, 2, 7], 10)); // 1
console.log(countPairs([1, 2, 3, 4, 5], 10)); // 0
console.log(countPairs([1, 2, 3, 4, 5], -3)); // 0
console.log(countPairs([0, -4], -4)); // 1
console.log(countPairs([1, 2, 3, 0, -1, -2], 0)); // 2

module.exports = countPairs;
