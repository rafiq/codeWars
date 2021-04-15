// This is a great way to quickly get the min of an array of strings. Math.min and spread the arr and then map over each element which can return the lengths of each string. Genius.

function cutIt(arr){
    const minLength = Math.min(...arr.map(x => x.length));
    return arr.map(x => x.slice(0, minLength));
  }