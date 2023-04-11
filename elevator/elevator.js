function createElevator(building, floors, floorNum, passengers){
    var elevator = {
        building: building,
        floors: floors,
        currentFloor: floorNum,
        passengers: passengers,
    }
    return elevator
}

function changeFloors(elevator, floor){
    if (elevator.currentFloor === floor){
        return `You're already on floor ${floor}!`
    } else if (floor < elevator.floors){
        return `Taking you to floor ${floor}!`
    } else {
        return `Floor ${floor} does not exist!`
    }
}

function dropOffPassenger(elevator, passenger){
    for (var i=0; i<elevator.passengers.length; i++){
        if (elevator.passengers[i] === passenger){
            elevator.passengers.splice(i,1)
        }
    }
    return elevator.passengers
}

module.exports = { 
    createElevator,
    changeFloors,
    dropOffPassenger
};
