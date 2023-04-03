function createMeal(name, request, tableNum) {
    var meal = {
        name: name,
        specialRequests: request,
        tableNumber: tableNum,
        complete: false
    }
    return meal;
}

function getMade(meal) {
    meal.complete = true;
    return meal
}

function announceMeal(meal) {
    if (meal.complete === true) {
        return `Order up - ${meal.name} for table ${meal.tableNumber}!`
    } else {
        return `This ${meal.name} is not completed yet`
    }
}

function createOrder(order) {
    var order = {
        tableNumber,
        meals,
    }
    console.log(order)
    return order
}

module.exports = { 
    createMeal,
    getMade,
    announceMeal,
    createOrder
};
