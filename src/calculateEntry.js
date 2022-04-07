const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const crianca = entrants.filter((person) => person.age < 18).length;
  const adulto = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const senhor = entrants.filter((person) => person.age >= 50).length;
  return { crianca, adulto, senhor };
}

function calculateEntry(entrants) {
  if (!entrants || entrants.length === undefined) {
    return 0;
  }
  const result = countEntrants(entrants);
  return result.crianca * 20.99 + result.adulto * 49.99 + result.senhor * 24.99;
}

module.exports = { calculateEntry, countEntrants };
