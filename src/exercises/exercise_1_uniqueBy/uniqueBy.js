export default function uniqueBy(data, key) {
  // * Write function here
  // based on ReadMe, the unique identifier is the property "member";
  const keyMap = {};
  const uniques = [];

  // loop through to assign map with individual keys in order.
  for (let i = 0; i < data.length; i++) {
    keyMap[data[i][key]] = i; //overriding each time when duplicate
  }

  // builds return array accesing ordered map
  for (let [, index] of Object.entries(keyMap)) {
    uniques.push(data[index]);
  }
  // O of 1 space
  return uniques;

}
