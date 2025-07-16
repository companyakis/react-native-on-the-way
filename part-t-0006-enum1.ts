enum Cities {

  Ankara, // 0
  Izmir,
  Istanbul,
  Adana,
  Antalya // 4
}

let crowdedCity: Cities = Cities.Istanbul

console.log(crowdedCity) // 2

enum Cities2 {

  Ankara = "Ankara", 
  Izmir = "Izmir",
  Istanbul = "Istanbul", 
  Adana = "Adana",
  Antalya = "Antalya" 
}

console.log(Cities2.Antalya) // Antalya
