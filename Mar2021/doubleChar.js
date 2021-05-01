function doubleChar(str) {
    return str.split("").reduce((acc,curr,idx) => {
        acc += curr + curr
        return acc;
    },"");
  }
console.log(
doubleChar("String") ,// "SSttrriinngg"

doubleChar("Hello World") ,// "HHeelllloo  WWoorrlldd"

doubleChar("1234!_ ") ,// "11223344!!__  "
)