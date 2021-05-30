function dirReduc(arr){
    let opposite = {
        'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    let result = [];
   arr.forEach(el => {
       if (opposite[el] === result[result.length - 1]) result.pop();
       else result.push(el);
   })
   return result;
}
// return arr.reduce((acc,curr) => {
//     opposite[curr] === acc[acc.length - 1] ? acc.pop() : acc.push(curr);
//    console.log(acc) // opposite[acc.slice(-1)] === curr ? acc.pop() : acc.push(curr);
//     return acc;
// },[])
  console.log(
    dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]),// ["WEST"])
    // dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]),// ["NORTH", "WEST", "SOUTH", "EAST"])
    // dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]),// [])
  )