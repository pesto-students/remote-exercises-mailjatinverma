
function animalSort(animals) {
  if (animals === []) return [];

  animals.sort(
    function (a, b) {
      if (a.numberOfLegs === b.numberOfLegs) {
        return a.name > b.name ? 1 : -1;
      }
      return a.numberOfLegs > b.numberOfLegs ? 1 : -1;
    },
  );
  return animals;
}

export { animalSort };
