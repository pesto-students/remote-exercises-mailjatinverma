
function removeFalsyValues(array) {

var filtered = array.filter(Boolean);
return filtered;

}

export {
  removeFalsyValues,
};
