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

function findCoins(level, newCoins){
    updatedLevel = {
        coins: level.coins + newCoins,
        lives: level.lives
    }
    if (newCoins >= 100){
        level.lives += 1
    }
    return updatedLevel
}

function defeatPlayer(level){
  if (level.lives === 1) {
        return 'GAME OVER'
    } else {
       level.lives -= 1
       return level
    }
}

module.exports = { 
    createPlayer,
    createLevel,
    findCoins,
    defeatPlayer
};