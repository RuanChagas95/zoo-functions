const { species, employees } = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => (Object.values(species
  .find((specie) => specie.id === employees
    .find((employee) => employee.id === id)
    .responsibleFor[0]).residents.reduce((older, resident) =>
    (resident.age > older.age ? resident : older))));
module.exports = getOldestFromFirstSpecies;
