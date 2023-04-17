function createBarber(name, earnings, knownCuts){
    var barber = {
        name: name,
        earnings: earnings || 0,
        haircuts: knownCuts || []
    }
    return barber
};

function giveCompliment(haircut){
    return `This ${haircut.style} looks great!`
};

function cutHair(barber, haircut){
    barber.haircuts.push(haircut)
    return barber
}

module.exports = {
    createBarber,
    giveCompliment,
    cutHair,
 };