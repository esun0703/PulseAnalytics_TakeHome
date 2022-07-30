export default function filterBy(data, searchTerm, keys) {
  // * Write function here
  // filter through data array
  return data.filter(item => {
    //iterate through search keys
    for (let key of keys) {
      if (item[key].toLowerCase().includes(searchTerm.toLowerCase())){
        return true;
      }
    }
    return false;
  });
}
