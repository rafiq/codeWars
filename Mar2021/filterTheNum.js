var FilterString = function(value) {


    return +value.match(/[0-9]/g).join("");
  }
  console.log(
    FilterString("123"),//123, 'Just return the numbers');
    FilterString("a1b2c3"),//123, 'Just return the numbers');
    FilterString("aa1bb2cc3dd"),//`123, 'Just return the numbers');
  )

//   Some master code below
var FilterString = function(value) {
    return parseInt(value.replace(/[^\d]/g, ""))
  }

  var FilterString = function(value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
  }