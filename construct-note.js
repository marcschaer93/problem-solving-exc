// add whatever parameters you deem necessary
function constructNote(message, letters) {
  if (!message) return true;
  if (!letters) return false;

  const freqCounter = (string) => {
    let obj = {};

    for (let char of string) {
      if (obj[char]) {
        obj[char] = obj[char] + 1;
      } else {
        obj[char] = 1;
      }
    }
    return obj;
  };

  const messageFreq = freqCounter(message);
  const lettersFreq = freqCounter(letters);

  for (let char in messageFreq) {
    if (messageFreq[char] > lettersFreq[char]) return false;
    if (!(char in lettersFreq)) return false;

    return true;
  }
}

constructNote("aa", "abc"); // false
constructNote("abc", "dcba"); // true
constructNote("aabbcc", "bcabcaddff"); // true

module.exports = constructNote;
