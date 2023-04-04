function createPlayer(name, age, moveset){
    var player = {
        name: name,
        age: age,
        moveset
    }
    return player
}

function createLevel(name, players){
    var level = {
        name: name,
        players,
        coins: 0,
        lives: 3
    }
    return level
}

function findCoins(){
    level.coins 
}

module.exports = { 
    createPlayer,
    createLevel,
    findCoins
};