function giveInfo() {

    return "React Native is on the way!"
}

let condition = giveInfo()

console.log(condition) 

function giveExtraInfo(subject, year) {

    return `In ${year}, I think ${subject} will be very important!`
}

const extraInfo = giveExtraInfo("AI", 2025)

console.log(extraInfo)

// run "node main.js"

// React Native is on the way!
// In 2025, I think AI will be very important!
