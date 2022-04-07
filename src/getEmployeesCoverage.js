const data = require('../data/zoo_data');

const { species, employees } = data;

const validParam = (param) => {
  const target = employees.find(({ firstName, lastName, id }) =>
    firstName === param
    || lastName === param
    || id === param);

  return target;
};

const animalsResponsibleFor = (responsibleFor) => {
  const animalNames = [];
  const animalsLocation = [];

  responsibleFor.forEach((animalId) => {
    species.find(({ id, name, location }) => {
      if (id === animalId) {
        animalNames.push(name);
        animalsLocation.push(location);
      }

      return false;
    });
  });
  return [animalNames, animalsLocation];
};

const makeCoverage = ({ id, firstName, lastName, responsibleFor }) => {
  const [name, locations] = animalsResponsibleFor(responsibleFor);

  const obj = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: name,
    locations,
  };

  return obj;
};

const allCoverage = () => {
  const coverage = [];

  employees.forEach((employee) => {
    coverage.push(makeCoverage(employee));
  });

  return coverage;
};

const validation = (param) => {
  let result = {};

  const input = Object.values(param);
  const employeeData = validParam(...input);

  if (employeeData === undefined) { throw new Error('Informações inválidas'); }
  if (employeeData !== undefined) { result = makeCoverage(employeeData); }

  return result;
};

function getEmployeesCoverage(param) {
  let result;

  if (param === undefined) {
    result = allCoverage();
  } else {
    result = validation(param);
  }

  return result;
}

module.exports = getEmployeesCoverage;
