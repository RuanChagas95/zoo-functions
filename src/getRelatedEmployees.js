const data = require('../data/zoo_data');

const { employees } = data;
const isManager = (id) => employees.some((employee) => employee.managers.includes(id)) || false;

const getRelatedEmployees = (managerId) => {
  if (isManager(managerId)) {
    return employees.filter((employee) => employee.managers.includes(managerId))
      .map((employee) => (`${employee.firstName} ${employee.lastName}`));
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

module.exports = { isManager, getRelatedEmployees };
