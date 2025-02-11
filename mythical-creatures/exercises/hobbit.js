function createHobbit(name, age){
  var hobbit = {
    name: name || "unknown",
    age: age || 0,
    isAdult: false,
    isOld: false,
    acquaintances: [],
  }
  return hobbit
}

function celebrateBirthday(hobbit){
  hobbit.age += 1
  if (hobbit.age > 32){
    hobbit.isAdult = true
  }
  if (hobbit.age > 100){
    hobbit.isOld = true
  }
  return hobbit
}

function getRing(hobbit){
  if (hobbit.name === "Frodo"){
    return 'Here is the ring!'
  } else {
    return 'You can\'t have it!'
  }
}

function meetPeople(hobbit, people){
  for (var i=0; i<people.length; i++){
    hobbit.acquaintances.push(people[i])
  }
  return hobbit
}

function findFriends(socialHobbit){
  var friends = []
  for (var i=0; i<socialHobbit.acquaintances.length; i++){
    if (socialHobbit.acquaintances[i].relationship === "friend"){
      friends.push(socialHobbit.acquaintances[i].name)
    }
  }
  return friends
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  getRing, 
  meetPeople, 
  findFriends
}