const not = condition =>
  !condition

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

const hasDivisor = number => {
  const initialIterationValue = getHalfValueOf(number)

  for (let i = initialIterationValue; i >= 2; i--) {
    if (hasZeroModBy(i)(number))
      return true
  }

  return false
}

const isPrime = number => 
  (not(isEvenAndDiferentFrom(2)(number)) && 
   not(isSquareRootAnIntegerNumber(number)) && 
   not(hasDivisor(number)))

const numbers = [...Array(20).keys()]

const primeNumbers = numbers.filter(isPrime)

console.log(primeNumbers)
