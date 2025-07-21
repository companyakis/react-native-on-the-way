function sum(x: number, y: number, z?: number) {

  if ( z !== undefined) {

    console.log(`${x} + ${y} + ${z} = ${x + y + z}`)
  }

  else {

    console.log(`${x} + ${y} = ${x + y}`)
  }

}

let result1 = sum(65_000, 3.14, 62_412.87)

let result2 = sum(12.32, 54)

// [LOG]: "65000 + 3.14 + 62412.87 = 127416.01000000001" 

// [LOG]: "12.32 + 54 = 66.32" 
