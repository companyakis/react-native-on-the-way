let monthly_sales_grouped_quarterly: number[][] = [

  [800_000, 650_000, 720_000],
  [900_000, 350_000, 520_000],
  [500_000, 850_000, 920_000],
  [200_000, 250_000, 220_000],
]


monthly_sales_grouped_quarterly[1][2] = 699_000

console.log(monthly_sales_grouped_quarterly)


// [LOG]: [[800000, 650000, 720000], [900000, 350000, 699000], [500000, 850000, 920000], [200000, 250000, 220000]]
