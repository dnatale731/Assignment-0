function fizzBuzz(start, end) {
  // Insert code here;
  let array = new Array()

  for(let i = start; i <= end; i++) {
    if(i % 3 == 0){
      if(i % 5 == 0) {
        array.push("FizzBuzz")
      }
      else {
        array.push("Fizz")
      }
    }
    else if(i % 5 == 0){
      array.push("Buzz")
    }
    else {
      array.push(i)
    }
  }

  return array
}

// Do not edit this line;
module.exports = fizzBuzz;