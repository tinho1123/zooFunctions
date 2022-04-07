const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  return employees
    .find((name) => name.firstName === employeeName || name.lastName === employeeName);
}

module.exports = getEmployeeByName;
