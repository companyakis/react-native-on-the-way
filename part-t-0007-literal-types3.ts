type Employee = "Senior Expert" | "Expert" | "Assistant"

function getEmployeeData(name: string, title: Employee): string {

  return `${name} is a/an ${title}`
}

let employee_kagan = getEmployeeData("Kağan Bilir", "Senior Expert")

console.log(employee_kagan) // "Kağan Bilir is a/an Senior Expert" 
