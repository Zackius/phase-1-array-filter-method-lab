const findMatching = (drivers, names) => {
  return drivers.filter(
    (nameMatch) => nameMatch.toLowerCase() === names.toLowerCase()
  );
};

const fuzzyMatch = (drivers, driverName) => {
  return drivers.filter(
    (letterMatch) =>
      letterMatch.toLowerCase().indexOf(driverName.toLowerCase()) === 0
  );
};

const matchName = (drivers, driverDetails) => {
  return drivers.filter((details) => details.name === driverDetails);
};
