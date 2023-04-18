function createMeal(meal, calories){
    var meal = {
        type: meal,
        calorieGoal: calories,
        dishes: []
    }
    return meal
};

function addDish(meal, dish){
    if (dish.calories < meal.calorieGoal){
        meal.dishes.push(dish)
    }
    meal.calorieGoal -= dish.calories
    return meal
};

function calculateCalories(meal){
    var sumOfCals = 0
    for (var i=0; i<meal.dishes.length; i++){
        sumOfCals += meal.dishes[i].calories
    }
    return `${meal.type} has a total of ${sumOfCals} calories.`
}

module.exports = { 
    createMeal, 
    addDish, 
    calculateCalories
}