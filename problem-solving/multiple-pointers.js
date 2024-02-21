// naive solution O(n˜2) nested loop
function sumZero(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    for (let y = i + 1; y < nums.length; y++) {
      if (nums[i] + nums[y] === 0) {
        return [nums[i], nums[y]];
      }
    }
  }
}

console.log("SumZero nested loop:", sumZero([-4, -1, 0, 3, 4, 6, 7]));

// optimal solution O(n)
function sumZeroMultiplePointers(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === 0) {
      return [nums[left], nums[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(
  "SumZeroMultiplePointers:",
  sumZeroMultiplePointers([-4, -1, 0, 3, 4, 6, 7])
);
