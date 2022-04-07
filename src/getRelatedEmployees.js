const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const colaboradores = employees.filter((employee) =>
      employee.managers.includes(managerId));
    const result = colaboradores
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
