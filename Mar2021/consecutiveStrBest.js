// `this is a good solution for this. Mine did work, but I did way more than was necessary. Creating one loop and putting the temporary variables in there is genius, because your just looking for the longest substring. So store the current longest and return it, if there is nothing longer than it.

function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) {
      return '';
    }

    return strarr.reduce((long, item, i) => {
      const currString = strarr.slice(i, i + k).join('');
      return (currString.length > long.length)
        ? currString
        : long;
    }, '');
  }


//   The below is also a smart way of doing which is similar to above but using one for loop
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}