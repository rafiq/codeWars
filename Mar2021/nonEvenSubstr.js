function solve(s){
    // let array = s.split("")
    // let set = [];

    // for (let i = 0; i < array.length; i++) {
    //     set.push(array[i])
    // }
    // for (let i = 0; i < array.length; i++) {
    //     set.push(array.slice(i).join(""))
    // }
    // for (let i = array.length; i >= 0; i--) {
    //     set.push(array.slice(0,i).join(""))
    // }

    // return set.reduce((acc,curr) => {
    //     if (Number(curr) % 2 === 1) acc.push(curr)
    //     else acc;
    //     return acc;
    // },[]);

    // let len = s.length;
    // let count = 0;

    // for (let i = 0; i < len; i++) {
    //     let temp = s.charAt(i) - 0;
    //     if (temp % 2 == 1)
    //         count += (i + 1);
    //     }

    //     return count;
// This is a very useful formula to know because I am 100% sure that I will have to find substrings from a string several times before breakfast everyday. This is going over a string and usign a nested for loop, it keeps slice the orginial array and pushing that copy into a new array and then returns the new array which has all possible substrings.
    let array = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            array.push(s.slice([i],[j]))
        }
    }
    return array.reduce((acc,curr) => {
        if (parseFloat(curr) % 2 === 1) acc += 1;
        return acc;
    },0);
};
console.log(
    solve("1341"),//7);
    solve("1357"),//10);
    solve("13471"),//12);
    solve("134721"),//13);
    solve("1347231"),//20);
    solve("13472315"),//28);
)

// The below is not what I want because I want all the possible substrings of a string.
function powerSet(arr) {
    if(arr.length === 0) {
        return [[]];
    }
    var lastElement = arr.pop();
    var restPowerset = powerSet(arr);
    var powerset = [];
    for(var i = 0; i < restPowerset.length; i++) {
        var set = restPowerset[i];
        powerset.push(set);
        set = set.slice();
        set.push(lastElement);
        powerset.push(set);
    }
    return powerset;
};