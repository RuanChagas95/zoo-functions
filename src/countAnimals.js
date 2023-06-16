const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal = {}) {
  const counts = species.filter((specie) => (specie.name === (animal.species || specie.name)))
    .map((specie) => ({ name: specie.name,
      count: specie.residents
        .filter((resident) => resident.sex === (animal.sex || resident.sex)).length }))
    .reduce((newCounts, specie) => ({ ...newCounts, [specie.name]: specie.count }), {});
  return Object.keys(counts).length > 1 ? counts : counts[animal.species];
}
module.exports = countAnimals;
