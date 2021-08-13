/**
 * @param {string} date
 * @return {number}
 */
 var dayOfYear = function(date) {
    const days = [31,28,31,30,31,30,31,31,30,31,30,31];
    let year = Number(date.substring(0,4)),
        month = Number(date.substring(5,7)),
        day = Number(date.substring(8));
    if (isLeapYear(year)) days[1] = 29;
    let res = 0;
    for (i = 0; i < month-1; i++) {
        res += days[i];
    }
    return res + day;
};

var isLeapYear = function(year) {
    if (year % 4 !== 0) return false;
    else if (year % 100 !== 0) return true;
    else if (year % 400 !== 0) return false;
    else return true;
}
console.log(
    dayOfYear("2019-01-09"),//9
)