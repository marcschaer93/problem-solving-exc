let simple = "Hello";
let hard = "Hello I am !31 years old$";

// define function
const freqCounter = (string) => {
  // empty object as placeholder
  let obj = {};
  // loop through string
  for (let char of string) {
    // if already in obj, increase 1
    // if not in obj, add to obj
    if (/[a-z0-9]/i.test(char)) {
      char = char.toLowerCase();
      obj[char] = obj[char] + 1 || 1;
    }
  }
  return obj;
};

console.log(freqCounter(simple));
console.log(freqCounter(hard));

// define function
const validAnagram = (str1, str2) => {
  // check if same string.length
  // if not return false
  if (str1.length !== str2.length) return false;
  // count frequent for each char
  const freq1 = freqCounter(str1);
  const freq2 = freqCounter(str2);

  for (let char in freq1) {
    if (!(char in freq2)) return false;
    if (freq1[char] !== freq2[char]) return false;
  }
  // check if same frequent
  // if yes return true else false
  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
