function ageCalculator(birthYear: number, currentYear: number = 2025): number {

  if (birthYear > currentYear) {

    return 0
  }

  else {

    return currentYear - birthYear
  }
}

let age1 = ageCalculator(1966)

let age2 = ageCalculator(1987, 2024)

let age3 = ageCalculator(2035)

console.log(age1)

console.log(age2)

console.log(age3)

// [LOG]: 59 
// [LOG]: 37 
// [LOG]: 0 
