const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal = { species: /.*/ }) {
  const counts = species.filter((specie) => !(specie.name.replace(animal.species, '')))
    .map((specie) => ({ name: specie.name,
      count: specie.residents
        .filter((resident) => !resident.sex.replace(animal.sex || /.*/, '')).length }))
    .reduce((newCounts, specie) => ({ ...newCounts, [specie.name]: specie.count }), {});
  return Object.keys(counts).length > 1 ? counts : counts[animal.species];
}
module.exports = countAnimals;
