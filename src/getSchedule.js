const data = require('../data/zoo_data');

const { species, hours } = data;

const findAnimals = (scheduleTarget) => {
  let target;
  species.filter((specie) => {
    if (specie.name === scheduleTarget) {
      target = specie.availability;
    }
    return target;
  });

  return target;
};

const exhibition = (scheduleTarget) => {
  const animalNames = [];
  species.filter(({ name, availability }) => {
    availability.forEach((day) => {
      if (day === scheduleTarget) { animalNames.push(name); }
    });
    return animalNames;
  });
  return animalNames;
};

const findDates = (scheduleTarget) => {
  const hasADate = hours[scheduleTarget];
  let obj;

  if (hasADate !== undefined) {
    const openClose = Object.values(hasADate);
    obj = {
      [scheduleTarget]: {
        officeHour: `Open from ${openClose[0]}am until ${openClose[1]}pm`,
        exhibition: exhibition(scheduleTarget),
      },
    };
  }

  if (scheduleTarget === 'Monday') {
    obj = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }

  return obj;
};

const allTimes = () => {
  const days = Object.keys(hours);

  const obj = {};
  days.forEach((day) => {
    obj[day] = findDates(day)[day];
  });
  console.log(obj);
  return obj;
};

function getSchedule(scheduleTarget) {
  let result = {};
  const animals = findAnimals(scheduleTarget);
  const dates = findDates(scheduleTarget);

  if (animals !== undefined) {
    result = animals;
  } else if (dates !== undefined) {
    result = dates;
  } else {
    result = allTimes();
  }

  return result;
}

module.exports = getSchedule;
