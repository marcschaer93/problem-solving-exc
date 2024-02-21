// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
  const freqCounter = (str) => {
    let obj = {};

    for (let char of str) {
      obj[char] = obj[char] + 1 || 1;
    }
    return obj;
  };

  const str1 = int1.toString();
  const str2 = int2.toString();

  if (str1.length !== str2.length) return false;

  const freqInt1 = freqCounter(str1);
  const freqInt2 = freqCounter(str2);

  for (let num in freqInt1) {
    if (!(num in freqInt2)) return false;
    if (freqInt1[num] !== freqInt2[num]) return false;
  }

  return true;
}

module.exports = sameFrequency;

// Write a function called ***sameFrequency***. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// ```jsx
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
