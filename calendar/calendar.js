function createEvent(name, month, day){
if (day<32 && day>0){
    var event = {
        title: name,
        month: month,
        day: day,
    }
    return event
} else {
    return `Error: ${day} is not a valid day`
}
}

function createCalendar(name, events){
    var calendar = {
        owner: name,
        events: events
    }
    return calendar
}

function reportMonthlyEvents(calendar, month){
    var monthlyEvents = []
    for (var i=0; i<calendar.events.length; i++){
        if (calendar.events[i].month === month){
            monthlyEvents.push(calendar.events[i])
        }
    }
    return monthlyEvents
}


module.exports = {  
    createEvent,
    createCalendar,
    reportMonthlyEvents
};