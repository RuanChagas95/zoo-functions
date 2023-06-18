const { employees, species } = require('../data/zoo_data');

const getEmployeesCoverage = (employeePart) => {
  if (!employeePart) {
    return employees.map((employee) => getEmployeesCoverage(employee));
  }
  try {
    const employee = employees.find((employeeCurr) => (employeeCurr.id === employeePart.id
      || employeeCurr.firstName === employeePart.name || employeeCurr.lastName === employeePart.name));
    const employeeSpecies = employee.responsibleFor.map((id) =>
      species.find((specie) => specie.id === id).name);
    const speciesLocations = employee.responsibleFor.map((id) =>
      species.find((specie) => specie.id === id).location);
    return { id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employeeSpecies,
      locations: speciesLocations,
    };
  } catch (error) {
    throw new Error('Informações inválidas');
  }
};
module.exports = getEmployeesCoverage;
