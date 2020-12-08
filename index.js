const findMatching = (arr, string) => {
  return arr.filter(x => {
    return x.toLowerCase() === string.toLowerCase()
  })
};

const fuzzyMatch = (arr, string) => {
  return arr.filter(x => {
    return x.charAt(0) && x.charAt(1) === string.charAt(0) && string.charAt(1)
  })
};