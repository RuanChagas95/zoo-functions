const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => species.filter((specie) => ids.includes(specie.id));
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
