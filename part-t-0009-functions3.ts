function premium_monthly(sales: number[]): number[] {

  let premiums: number[] = []

  for (let sale of sales) {

    if (sale > 100_000) {

      premiums.push(sale * 0.15)
    }

    else {

      premiums.push(0)
    }
    
  }

  return premiums
}

let six_month_sales = [210_000, 95_000, 107_650, 145_000, 96_400, 145_600]

let six_month_sales_premiums = premium_monthly(six_month_sales)

console.log(six_month_sales_premiums) // [31500, 0, 16147.5, 21750, 0, 21840]
