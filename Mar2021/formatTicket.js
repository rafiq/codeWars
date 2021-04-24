function nbrValidTickets(tickets){
    let newArray = [];

    tickets.forEach(codes => {
        if (isLetter(codes[0]) && isNum(codes[1]) && codes.slice(2).match(/^[0-9]+$/) != null) {
            newArray.push(codes)
        }
    })

    // for (let j = 0; j < tickets.length; j++) {
    //     console.log(tickets[j][0] )
    //     // if (tickets[j][0] )
    // }


// console.log(newArray)
    return newArray;
// return isNum(tickets[1][1]);
}
function isLetter(char) {
    return char >="A" && char <= "Z";
}
function isNum(num) {
    return /^\d+$/.test(num)
}
console.log(
    nbrValidTickets(["A9JZOD","E9FIDH","SI2JIS","F8JIODJ","FDSNJA","A9POF?","AA9DIJD"]),//2);
    )
    // if (isLetter(tickets[j][0])) {
    //     if (!isNaN(tickets[j][1])) {
    //         if (tickets[j].slice(2).match(/^[0-9]+$/) != null) {
    //             newArray.push(tickets[j])
    //         }
    //     }
    // }
    // // string.match(/^[0-9]+$/) != null