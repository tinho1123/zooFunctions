const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  const result = species.reduce((acc, nextElement) => {
    acc[nextElement.name] = nextElement.residents.length;
    return acc;
  }, {});
  if (animal === undefined) {
    return result;
  }
  if (!animal.sex) {
    return result[animal.specie];
  }
  return species.find((specie) => specie.name === animal.specie)
    .residents.reduce((acc, nextElement) => {
      if (nextElement.sex === animal.sex) {
        return acc + 1;
      } return acc;
    }, 0);
}

module.exports = countAnimals;
