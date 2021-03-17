function validatePIN (pin) {
    return (pin.length === 4 || pin.length === 6 )&& pin.match(/[^0-9]/gi) == null;
    // return pin.match(/[^0-9]/gi) == null;
    // return pin.match(/[^0-1]/gi) ? pin.match(/[^0-1]/gi).length === 0 : true;
   }
console.log(
   validatePIN('a234'),//false,// "Wrong output for '1'")
   validatePIN("12"),//false,// "Wrong output for '12'")
   validatePIN("123"),//false,// "Wrong output for '123'")
   validatePIN("12345"),//false,// "Wrong output for '12345'")
   validatePIN("1234567"),//false,// "Wrong output for '1234567'")
   validatePIN("-1234"),//false,// "Wrong output for '-1234'")
   validatePIN("1.234"),//false,// "Wrong output for '1.234'")
   validatePIN("-1.234"),//false,// "Wrong output for '-1.234'")
)