const findMatching = (arr, string) => {
  return arr.filter(x => {
    return x.toLowerCase() === string.toLowerCase();
  });
};

const fuzzyMatch = (arr, string) => {
  return arr.filter(x => {
    return x.startsWith(string);
  });
};

const matchName = (arr, string) => {
  return arr.filter(x => {
    return x.name === string
  })
};