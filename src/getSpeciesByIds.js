const { data, species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (Array.isArray(ids) === false) {
    return [];
  }
  return species.filter(({ id }) => ids.includes(id));
}

module.exports = getSpeciesByIds;
