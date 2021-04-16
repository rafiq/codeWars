// This was a good one that used a while loop and incrementing through the original arrays which is similar to the way I did it.

function mergeArrays(a, b) {
    // your code here
    var returnArray = [];
    var counter = 0;
    while (a[counter] || b[counter] ){
      if(a[counter]){
        returnArray.push(a[counter]);
      }
      if(b[counter]){
        returnArray.push(b[counter]);
      }
      counter++;

     }
     return returnArray;
  }

//   THis is the same as mine but less lines of code. Honestly it is about the same amount of characters now that I look at both.
function mergeArrays(a, b) {
    let j = [],
        longest = a.length > b.length ? a:b;
    for (var i=0; i<longest.length; i++){
      if (a[i]) j.push(a[i])
      if (b[i]) j.push(b[i])
    }
    return j
  }