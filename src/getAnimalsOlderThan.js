const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const especie = species.find((specie) => specie.name === animal).residents;
  return especie.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
