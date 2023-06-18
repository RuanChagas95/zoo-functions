const { employees, species } = require('../data/zoo_data');

const getEmployeesCoverage = (employeePart) => {
  if (!employeePart) {
    return employees.map((employee) => getEmployeesCoverage(employee));
  }
  try {
    const employee = employees.find((employeeCurr) => (employeeCurr.id === employeePart.id
      || employeeCurr.firstName === employeePart.name
      || employeeCurr.lastName === employeePart.name));
    const employeeSpecies = employee.responsibleFor.reduce((obj, id) => {
      const { name, location } = species.find((specie) => specie.id === id);
      return { species: [...obj.species, name], locations: [...obj.locations, location] };
    }, { species: [], locations: [] });
    return { id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      ...employeeSpecies,
    };
  } catch (error) {
    throw new Error('Informações inválidas');
  }
};
module.exports = getEmployeesCoverage;
