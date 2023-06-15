const { species, hours } = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => {
  if (species.find((specieCurrent) => specieCurrent.name === scheduleTarget)) {
    return species.find((specieCurrent) => specieCurrent.name === scheduleTarget).availability;
  }
  const createDay = (day) => {
    const speciesList = species
      .filter((specie) => specie.availability.includes(day))
      .map((specie) => specie.name);
    return { [day]: { exhibition: speciesList.length ? speciesList : 'The zoo will be closed!',
      officeHour:
      hours[day].open ? `Open from ${hours[day].open}am until ${hours[day].close}pm` : 'CLOSED',
    },
    };
  };
  if (hours[scheduleTarget]) {
    return createDay(scheduleTarget);
  }
  return Object.keys(hours).reduce((obj, day) => ({ ...obj, ...createDay(day) }), {});
};

module.exports = getSchedule;
