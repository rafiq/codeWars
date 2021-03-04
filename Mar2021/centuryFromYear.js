function centuryFromYear(year) {
    if (year < 101 ) return 1;
    else if (year % 100 >= 1) return Math.floor(year / 100) + 1;
    else return Math.floor(year / 100)
}
console.log(
centuryFromYear(1705),//(18)
centuryFromYear(1900),//(19)
centuryFromYear(1601),//(17)
centuryFromYear(2000),//(20)
)