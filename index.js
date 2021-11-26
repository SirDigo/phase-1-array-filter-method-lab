const findMatching = (drivers, name) => drivers.filter(drivers => drivers.toLowerCase() == name.toLowerCase());

const fuzzyMatch = (drivers, letters) => drivers.filter(drivers => drivers.slice(0, letters.length) === letters);

const matchName = (drivers, string) => {
    const obj = drivers.filter((drivers) => drivers.name === string)
    return obj
};

