// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
  if (!keys && !values) return {};
  if (!keys) return {};

  let obj = {};

  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = i < values.length ? values[i] : null;
  }
  return obj;
}

console.log(twoArrayObject(["a", "b", "c", "d"], [1, 2, 3]));

twoArrayObject(["a", "b", "c", "d"], [1, 2, 3]); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
twoArrayObject(["a", "b", "c"], [1, 2, 3, 4]); // {'a': 1, 'b': 2, 'c': 3}
twoArrayObject(["x", "y", "z"], [1, 2]); // {'x': 1, 'y': 2, 'z': null}

module.exports = twoArrayObject;
