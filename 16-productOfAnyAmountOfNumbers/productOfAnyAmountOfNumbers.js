function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let num = 1

  for(let i = 0; i < args.length; i++) {
    num *= args[i]
  }

  return num
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;