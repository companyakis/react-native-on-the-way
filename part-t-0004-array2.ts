let ages: number[] = [9, 25, 87, 47, 95]

ages.push(19)

ages.push(109)

console.log(ages)

ages[3] = 44

ages.pop()

console.log(ages)

// [LOG]: [9, 25, 87, 47, 95, 19, 109] 

// [LOG]: [9, 25, 87, 44, 95, 19]
