type Years = 2000 | 2018 | 2020 | 2025

function aboutYears(y: Years) : string {

  if (y === 2000) {

    return "Starting year!"
  } 

  else if (y === 2018) {

    return "Break time!"
  }

  else if (y === 2020) {

    return "Renovation started!"
  }

  else if (y === 2025) {

    return "Wake up Neo!"
  }

  return "Unexpected year given!"

} 

let check1 = aboutYears(2025)

console.log(check1)

let check2 = aboutYears(2005)

console.log(check2)

// [LOG]: "Wake up Neo!" 
// [LOG]: "Unexpected year given!"
