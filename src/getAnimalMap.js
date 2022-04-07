const data = require('../data/zoo_data');

const { species } = data;

const cardinalFilter = (cardinal) => species
  .filter(({ location }) => location === cardinal);

const noParameters = (cardinal) => {
  const cardinalFiltered = cardinalFilter(cardinal);

  return cardinalFiltered.map(({ name }) => name);
};

const justNames = (cardinal) => {
  const cardinalFiltered = cardinalFilter(cardinal);

  return cardinalFiltered.map(({ name, residents }) => ({ [name]: residents
    .map((resident) => resident.name) }));
};

const sortedNames = (cardinal) => {
  const cardinalFiltered = cardinalFilter(cardinal);

  return cardinalFiltered.map(({ name, residents }) => ({ [name]: residents
    .map((resident) => resident.name)
    .sort() }));
};

const selectBySex = (cardinal, options) => {
  const { sex } = options;
  const cardinalFiltered = cardinalFilter(cardinal);

  return cardinalFiltered.map(({ name, residents }) => ({ [name]: residents
    .filter((resident) => resident.sex === sex)
    .map((resident) => resident.name) }));
};

const sexAndSorted = (cardinal, options) => {
  const { sex } = options;

  const cardinalFiltered = cardinalFilter(cardinal);

  return cardinalFiltered.map(({ name, residents }) => ({ [name]: residents
    .filter((resident) => resident.sex === sex)
    .map((resident) => resident.name)
    .sort() }));
};

const hubSortAll = (cardinal, options) => {
  const { sorted } = options;

  return (sorted === undefined)
    ? justNames(cardinal) : sortedNames(cardinal);
};

const hubSortSex = (cardinal, options) => {
  const { sorted } = options;

  return (sorted === undefined)
    ? selectBySex(cardinal, options) : sexAndSorted(cardinal, options);
};

const hubSex = (cardinal, options) => {
  const { sex } = options;

  return (sex === undefined)
    ? hubSortAll(cardinal, options) : hubSortSex(cardinal, options);
};

const withParameters = (cardinal, options) => {
  const { includeNames } = options;

  return (includeNames === undefined)
    ? noParameters(cardinal) : hubSex(cardinal, options);
};

function getAnimalMap(options) {
  const hub = (cardinal) => {
    let result;
    if (options === undefined) {
      result = noParameters(cardinal);
    } else {
      result = withParameters(cardinal, options);
    }
    return result;
  };

  return { NE: hub('NE'), NW: hub('NW'), SE: hub('SE'), SW: hub('SW') };
}

module.exports = getAnimalMap;
