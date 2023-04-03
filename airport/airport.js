function createAirport(name, airlines, availableGates){
  var airport = {
    name: name,
    availableGates: availableGates,
    airlines: airlines
  }
  return airport
}

function welcomeGuests(airport){
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, planesLanding){
  airport.availableGates = airport.availableGates - planesLanding
  if (airport.availableGates > 0){
    return `Success! Current availability is ${airport.availableGates}.`
  } else if (airport.availableGates === 0){
    return `Oh no! Not enough gates available. Current overflow is 0.`
  } else if (airport.availableGates < 0){
    var overflow = airport.availableGates*-1
    airport.availableGates = 0 
    return `Oh no! Not enough gates available. Current overflow is ${overflow}.`
  }
}

function checkAirlineLocations(allAirports, airline){
  carriers = []
  for (var i = 0; i<allAirports.length; i++){
    if (allAirports[i].includes(airline)){
      carriers.push(allAirports[i])
    }
  }
  return carriers
}

function checkAirlineLocations(allAirports, airline){
  carriers = []
  for (var i = 0; i<allAirports.length; i++){
    if (allAirports[i].airlines.includes(airline)){
      carriers.push(allAirports[i].name)
    }
  }
  return carriers
}

module.exports = { 
createAirport, 
welcomeGuests, 
landPlanes, 
checkAirlineLocations
};


`Hellooo`