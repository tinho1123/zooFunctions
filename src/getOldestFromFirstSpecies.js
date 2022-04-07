const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees
    .find((employee) => employee.id === id)
    .responsibleFor[0];

  const result = data.species
    .find((specie) => specieId === specie.id).residents
    .reduce((old, resident) => {
      if (old.age < resident.age) {
        return resident;
      }
      return old;
    });
  return Object.values(result);
}

module.exports = getOldestFromFirstSpecies;
