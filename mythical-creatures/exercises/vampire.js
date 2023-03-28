function createVampire(name, pet){
var vampire = {
  name: name,
  pet: pet || "bat",
  thirsty: true,
  shout: "I WANT TO SUCK YOUR BLOOD!",
  ouncesDrank: 0
}
return vampire
}

// function encounterDeliciousVictim(vampire){
//   var expectedResponse = vampire.shout
//   return expectedResponse
// }

function encounterDeliciousVictim(vampire){
  if (vampire.thirsty === false){
    var response = 'No thanks, I am too full.'
    return response
  } else {
    var expectedResponse = vampire.shout
    return expectedResponse
  }
}


function drink(vampire){
vampire.ouncesDrank += 10
if (vampire.ouncesDrank > 49){
  vampire.thirsty = false
  vampire.ouncesDrank = 50
}
return vampire
}

function inquirePlace(locations, location){
var response = `No, I have never been to ${location}.`
  for (var i=0; i<locations.length; i++){
    if (locations[i] === location){
      response = `Yes, I have spent some time in ${location}.`
    } 
  }
  return response
}

function findBatLovers(vampires){
  var findBatLovers = []
  for (var i=0; i<vampires.length; i++){
    if (vampires[i].pet === "bat"){
      findBatLovers.push(vampires[i].name)
    }
  }
  return findBatLovers
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}