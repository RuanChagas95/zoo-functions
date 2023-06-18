const { species } = require('../data/zoo_data');

const locations = { NE: [], NW: [], SE: [], SW: [] };
const getAnimalMap = (options = {}) => {
  const map = species.reduce((obj, specie) => ({ ...obj,
    [specie.location]: [...obj[specie.location],
      specie.name] }), locations);
  if (options.includeNames) {
    return Object.entries(map).reduce((obj, entry) => {
      const speciesResidents = entry[1].map((specieName) => ({ [specieName]: species
        .find((specie) => specie.name === specieName)
        .residents.filter((resident) => resident.sex === (options.sex || resident.sex))
        .map((resident) => resident.name) }));
      return { ...obj, [entry[0]]: speciesResidents };
    },
    {});
  }
  return map;
};
console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
