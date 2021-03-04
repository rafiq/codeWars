function list(names) {

    // if array > 1 then last index will be ampersand otherwise put comma betweeen each element
    let newArray = [];

    for (let i = 0; i < names.length; i++) {
        newArray.push(names[i]["name"])
    }
    if (newArray.length > 1) return newArray.slice(0, names.length - 1).join(", ") + " & " + newArray.splice(names.length - 1);
    else return newArray.join("");

    // return arr.reduce((acc,curr) => {
    //     acc += curr["name"] + ","

    //     return acc;
    // },"")

    // arr.forEach(obj => console.log(obj["name"]))
}
console.log(
list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]),
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ]),
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ]),
// returns 'Bart'

list([]),
// returns ''
)