function premium(sales: number): number {

  if (sales > 300_000) {

    return sales * 0.15
  }

  return 0
}

let premium1 = premium(620_000)

console.log(premium1) // 93000

let premium2 = premium(220_000)

console.log(premium2) // 0
