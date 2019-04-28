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
