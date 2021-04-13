
function nexus(users) {

    let rankArray = Object.entries(users).sort((a,b) => a[0] - b[0]);

    let differencesArray = rankArray.map(arr => Math.abs(arr[0] - arr[1]));
    return +rankArray[differencesArray.indexOf(Math.min(...differencesArray))][0];
}
console.log(
    nexus({"1":3,"3":3,"5":3}),//3);
    nexus({  1 :93,
        10 :55,
        15 :30,
        20 :19,
        23 :11,
        30 : 2 }),// 20
)

// The below is using the if conditional to find the largest delta and it looks really cool. I really like how they used the reduce method and still were able to access the original mapping inside the reduce function. genius.
const nexus = x => +Object.keys(x).reduce((a,e) => Math.abs(e - x[e]) < Math.abs(a - x[a]) ? e : a);