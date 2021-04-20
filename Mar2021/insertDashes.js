function insertDash(num) {


    return num.toString().split("").reduce((acc,curr,idx,arr) => {
        if (curr % 2 === 1 && arr[idx + 1] % 2 === 1) acc += curr + "-";
        else acc += curr;
        return acc;
    },"")
 }
 console.log(
    insertDash(454793),//'4547-9-3');
    insertDash(123456),//'123456');
    insertDash(1003567),//'1003-567');
 )