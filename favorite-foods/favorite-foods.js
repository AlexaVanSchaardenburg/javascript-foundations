function createFavoriteFood({dish: food, ingredients, isSpicy}){
    var dish = {
        name: food,
        ingredients,
        isSpicy,
        timesOrdered: 0
    }
    return dish
}

function commentOnSpiciness(dish){
    if(dish.isSpicy){
        return `Wow, this ${dish.name} is so spicy!`
    } else {
        return `Phew, this ${dish.name} is not very spicy.`
    }
}

// function orderFood(dish){
//     var orderedDish = {
//         timesOrdered: 1
//     }
//     return orderedDish
// }

function orderFood(dish){
    dish.timesOrdered += 1
    return dish
}

function createShoppingList([meal1, meal2]){
    var list = [];
    list = meal1.ingredients.concat(meal2.ingredients)
    return list
}

module.exports = { 
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
};