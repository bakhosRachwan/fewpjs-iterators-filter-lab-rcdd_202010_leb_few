const findMatching = (arr, string) => {
  return arr.filter(x => {
    return x.toLowerCase() === string.toLowerCase()
  })
};

const fuzzyMatch = (drivers, string) => {
  
};