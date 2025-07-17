function getUserBirthYear(age: string | number, currentYear: number) : string {

  if (typeof age === "number") {

    return `User age is ${currentYear - age}`
  }

  else if (typeof age === "string") {

    return `Age info is not numeric. User info is ${age}`
  }

  else {
    
    return "Not available!"
  }
}

let age1 = getUserBirthYear(49, 2025)
console.log(age1)

let age2 = getUserBirthYear("Eleven", 2025)
console.log(age2)

let age3 = getUserBirthYear(true, 2025)
console.log(age3)

// [LOG]: "User age is 1976" 
// [LOG]: "Age info is not numeric. User info is Eleven" 
// [LOG]: "Not available!" 
