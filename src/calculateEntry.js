const { prices } = require('../data/zoo_data');

const countEntrants = (entrants) => (entrants.reduce((count, entrant) => {
  let ageGroup;
  if (entrant.age < 18) {
    ageGroup = 'child';
  } else {
    ageGroup = entrant.age >= 50 ? 'senior' : 'adult';
  }
  return { ...count, [ageGroup]: (count[ageGroup] || 0) + 1 };
}, {})
);

const calculateEntry = (entrants) => {
  if (entrants) {
    const count = countEntrants(entrants);
    return Object.keys(count)
      .reduce((acc, key) => (acc + (count[key] * prices[key])), 0) || 0;
  }
  return 0;
};
module.exports = { calculateEntry, countEntrants };
