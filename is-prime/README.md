# Refactoring isPrime function

`Original` code:
```
function isPrime(num) { 
  // if is even AND not 2
  if ((num % 2) === 0 && num !== 2)
    return false;

  // if a number has a **integer root** 
  // it means that is divisible
  if (Number.isInteger(Math.sqrt(num)))
    return false;

  // start the division from it half
  for (var i = Math.floor(num / 2); i >= 2; i--) {
    if(num % i === 0) {
      console.log('\n')
      console.log(num + ' é divisível por: ', i)
      return false;
    }
  }
  return true;
}

console.log(isPrime(10002)) // false
console.log(isPrime(10003)) // false
console.log(isPrime(10007)) // true

```

`Refactored` code:
```
const isSquareRootAnIntegerNumber = number => 
    Number.isInteger(Math.sqrt(number))

const hasZeroModBy = value => number => 
    number % value === 0

const isEvenAndDiferentFrom = value => number => 
    hasZeroModBy(2)(number) && number !== value

const isEvenAndDiferentFromTwoAndHasIntegerSquareRoot = number =>
    isEvenAndDiferentFrom(2)(number) || isSquareRootAnIntegerNumber(number)

const getHalfValueOf = number => 
    Math.floor(number / 2)

const isPrime = number => {
  if (isEvenAndDiferentFromTwoAndHasIntegerSquareRoot(number)) 
    return false

  const initialIterationValue = getHalfValueOf(number)

  for (let i = initialIterationValue; i >= 2; i--) {
    if (hasZeroModBy(i)(number)) {
      return false
    }
  }

  return true
}

console.log(isPrime(10002)) // false
console.log(isPrime(10003)) // false
console.log(isPrime(10007)) // true
```