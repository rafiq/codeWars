
function convertHashToArray(hash){

    return Object.entries(hash).sort((a,b) => {
        if (a[0] < b[0]) return -1;
        if (a[0] > b[0]) return 1;
        if (a[0] === b[0]) return 0;
    })
  }
  console.log(
    // convertHashToArray({name: "Jeremy"}),//[["name", "Jeremy"]]);
    convertHashToArray({name: "Jeremy", age: 24}),//[["age", 24], ["name", "Jeremy"]]);
    convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}),//[["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]);
    // convertHashToArray({product: "CodeWars", powerLevelOver: 9000}),//[["powerLevelOver", 9000], ["product", "CodeWars"]]);
    // convertHashToArray({}),//[]);
  )

//   I really like the way that they put the key and key values in the below code
const convertHashToArray = (hash) => Object.keys(hash).map(key => [key, hash[key]]).sort();
