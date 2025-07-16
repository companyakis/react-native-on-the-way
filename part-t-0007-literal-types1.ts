type Decision = "Hold" | "Buy" | "Sell"

function investment(d: Decision) {

  console.log(`Our investment decision: ${d}`)
}

investment("Hold")

investment("Buy")

investment("Sell")

//investment("Wait") // Error!

// [LOG]: "Our investment decision: Hold" 
// [LOG]: "Our investment decision: Buy" 
// [LOG]: "Our investment decision: Sell" 
