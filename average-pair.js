// add whatever parameters you deem necessary
function averagePair(nums, average) {
  if (!nums) return false;
  //   if (!Number.isInteger(average * 2)) return false;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const result = (nums[left] + nums[right]) / 2;
    if (result === average) {
      return true;
    } else if (result > average) {
      right--;
    } else {
      left++;
    }
  }

  return false;
}

averagePair([1, 2, 3], 2.5); // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
averagePair([], 4); // false

module.exports = averagePair;
