function createBirthday(name, month, day){
    birthday ={
        name: name,
        month: month,
        day: day,
    }
    return birthday
}

function celebrateBirthday(birthday){
    return `Today is ${birthday.month}/${birthday.day}! Happy birthday, ${birthday.name}!`
}

   //return number of birthdays in one month
        //if month in the birthday element (dot notation and/or bracket notation) is equal to the month parameter then push that birthday into a new array

function countBirthdays(birthdays, month){
    var birthdaysPerMonth = []
    for (var i=0; i<birthdays.length; i++){
        if (birthdays[i].month === month) {
            birthdaysPerMonth.push(birthdays[i])
        }
    }
    return birthdaysPerMonth.length
}

module.exports = { 
    createBirthday,
    celebrateBirthday,
    countBirthdays
 };