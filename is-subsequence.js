function isSubsequence(str1, str2) {
  let str1Left = 0;
  let str2Left = 0;

  while (str1Left < str1.length && str2Left < str2.length) {
    if (str1[str1Left] === str2[str2Left]) {
      str1Left++; // Move to the next character in str1 only if a match is found
    }
    str2Left++; // Always move to the next character in str2
  }

  // If we've gone through all characters in str1, it is a subsequence of str2
  return str1Left === str1.length;
}

console.log(isSubsequence("hello", "hello world")); // Expected true
console.log(isSubsequence("hello", "world")); // Expected false
console.log(isSubsequence("hello", "hlleo world")); // Expected false, because order matters and 'l' comes before 'e' in "hello"

module.exports = isSubsequence;
