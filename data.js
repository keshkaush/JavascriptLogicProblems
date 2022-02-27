# Below is one of the examples of pseudocode that returns the array of even numbers…

function getEvenNumbers
evenNumbers = []
for i = 0 to i = length of evenNumbers
  if (element % 2 === 0) 
    add to that to the array evenNumbers
return evenNumbers

# Code can be written as...

function getEvenNumbers(arrayofNumbers) {
  let evenNumbers = []
for (var i = 0; i < arrayofNumbers.length; i++) {
    if (arrayofNumbers[i] % 2 === 0) {
      evenNumbers.push(arrayofNumbers[i])
    }
  }
return evenNumbers
}

# optimizing my way of solving...

function getEvenNumbers(arrayofNumbers) {
  let evenNumbers = arrayofNumbers.filter(n => n % 2 === 0)
  return evenNumbers
}
