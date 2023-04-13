function createEvent(name, month, day){
    var event = {
        title: name,
        month: month,
        day: day,
    }
    return event
}

//if day === 0 || day > 31 then return error message


module.exports = {  
    createEvent
};