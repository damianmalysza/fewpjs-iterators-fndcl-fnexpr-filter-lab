function findMatching(drivers,string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers,string){
  let searchLength = string.length
  return drivers.filter(driver => driver.substring(0,searchLength).toLowerCase() === string.toLowerCase())
}

function matchName(drivers,string){
  return drivers.filter(driver => driver.name.toLowerCase() === string.toLowerCase())
}