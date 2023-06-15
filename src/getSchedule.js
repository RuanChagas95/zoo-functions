const { species, hours } = require('../data/zoo_data');

const getSchedule = (scheduleTarget) => {
  if (species.find((specieCurrent) => specieCurrent.name === scheduleTarget)) {
    return species.find((specieCurrent) => specieCurrent.name === scheduleTarget).availability;
  }
  if (hours[scheduleTarget]) {
    return { [scheduleTarget]: { exhibition: species.filter((specie) => specie.availability
      .find((day) => day === scheduleTarget))
      .map((specie) => specie.name),
    officeHour:
      `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`,
    },
    };
  }
};

console.log(getSchedule('lins'));
module.exports = getSchedule;
