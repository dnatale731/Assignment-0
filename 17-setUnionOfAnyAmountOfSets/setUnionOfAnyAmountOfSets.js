function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let setUnion = new Set()

  for(i of args) {
    for(j of i) {
      if(!setUnion.has(j)) {
        setUnion.add(j)
      }
    }
  }

  return setUnion;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;