const findMatching = (arr, string) => {
  return arr.filter(x => {
    return x.toLowerCase() === string.toLowerCase()
  })
};

const fuzzyMatch = (arr, string) => {
  return arr.filter(x => {
    return x.charAt(0) === string
  })
};