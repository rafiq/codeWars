function bonusTime(salary, bonus) {

    if (bonus) return "\u00A3" + (salary * 10);
    return "\u00A3" + salary;
    }
console.log(
    bonusTime(10000, true),  // ,//100000');
    bonusTime(25000, true), //,//250000');
    bonusTime(10000, false),// ,//10000');
    bonusTime(60000, false),// ,//60000');
    bonusTime(2, true), //,//20');
    bonusTime(78, false), //,//78');
    bonusTime(67890, true), //,//678900');
)