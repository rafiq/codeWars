function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

    // return Date.parse(currentDate) <= Date.parse(expirationDate) // new Date(currentDate).getDate();
    // var currentDate = new Date();
    // var month = currentDate.getMonth;
    // var day = currentDate.getDate();
    // var year = currentDate.getFullYear();

    // var months = {0: "January", 1: "February", 2: "March", 3: "April", 4: "May", 5: "June", 6: "July", 7: "August", 8: "September", 9: "October", 10: "November", 11: "December"};
    // var expDate = expirationDate.split(" ");

    // return [].reduce.call(months, function(expired, month, index) {
    //    return
    // && expDate[1] === day && expDate[2] === year) && enteredCode === correctCode;
    let date = new Date(currentDate);
    let expDate = new Date(expirationDate);

    if (date.getTime() - expDate.getTime() > 0) return false;
    if (enteredCode !== correctCode) return false;
    return true;

}
console.log(
    checkCoupon('123','123',"July 9, 2015", "July 9, 2015"),//  ===  false
    checkCoupon('123a','123',"July 9, 2015", "July 2, 2015"), // ===  false
    checkCoupon('123a','123',"September 5, 2014", "October 1, 2014") // ===  false
)