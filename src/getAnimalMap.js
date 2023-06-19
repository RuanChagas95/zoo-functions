const { species } = require('../data/zoo_data');

function refactMap(map, options) {
  return Object.entries(map).reduce((obj, entry) => {
    const speciesResidents = entry[1].map((specieName) => {
      const residents = species
        .find((specie) => specie.name === specieName)
        .residents.filter((resident) => resident.sex === (options.sex || resident.sex))
        .map((resident) => resident.name);
      return { [specieName]: options.sorted ? residents.sort() : residents };
    });
    return { ...obj, [entry[0]]: speciesResidents };
  },
  {});
}
const getAnimalMap = (options = {}) => {
  const locations = { NE: [], NW: [], SE: [], SW: [] };
  const map = species.reduce((obj, specie) => ({ ...obj,
    [specie.location]: [...obj[specie.location],
      specie.name] }), locations);
  if (options.includeNames) {
    return refactMap(map, options);
  }
  return map;
};
module.exports = getAnimalMap;
