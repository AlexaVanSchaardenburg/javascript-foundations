function createHobbit(name, age){
  var hobbit = {
    name: name || "unknown",
    age: age || 0, 
  }
  return hobbit
}

function celebrateBirthday(hobbit){
  hobbit.age += 1
  return hobbit.age
}

module.exports = {
  createHobbit, 
  celebrateBirthday, 
  // getRing, 
  // meetPeople, 
  // findFriends
}