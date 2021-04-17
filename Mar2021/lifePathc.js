function lifePathNumber(dateOfBirth) {

    let year = dateOfBirth.split("-")[0];
    let month = dateOfBirth.split("-")[1];
    let day = dateOfBirth.split("-")[2];

        while (year > 9) {
            year = getSumOfDigits(year)
        }
        while (month > 9) {
            month = getSumOfDigits(month)
        }
        while (day > 9) {
            day = getSumOfDigits(day);
        }
        let sum = +year + +month + +day;

        while (sum > 9) {
            sum = getSumOfDigits(sum);
        }
    return sum ;
  }
  function getSumOfDigits(num) {
      return String(num).split("").reduce((acc,curr) => acc + Number(curr),0)
  }
  console.log(
    lifePathNumber("1879-03-14"),// 6)



    lifePathNumber("1815-12-10"),// 1)


// it ("Life Path Number - Brendan Eich", function(){
    lifePathNumber("1961-07-04"),// 1)


// it ("Life Path Number - Bill Gates", function(){
    lifePathNumber("1955-10-28"),// 4)


// it ("Life Path Number - Leonardo da Vinci", function(){
    lifePathNumber("1452-04-15"),// 4)


// it ("Life Path Number - Charles Babbage", function(){
    lifePathNumber("1791-12-26"),// 2)


// it ("Life Path Number - Grace Hopper", function(){
    lifePathNumber("1906-12-09"),// 1)


// it ("Life Path Number - Alan Turing", function(){
    lifePathNumber("1912-06-23"),// 6)


// it ("Life Path Number - Steve Wozniak", function(){
    lifePathNumber("1950-08-11"),// 7)


// it ("Life Path Number - Guido van Rossum", function(){
    lifePathNumber("1956-01-31"),// 8)


// it ("Life Path Number - Yukihiro Matsumoto", function(){
    lifePathNumber("1965-04-14"),// 3)


// it ("Life Path Number - Elon Musk", function(){
    lifePathNumber("1971-06-28"),// 7)
  )