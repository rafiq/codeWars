// I really like this solution because this shows how to find the largest number in an array by using the reduce method and returning that element since the reduce method keeps checking the current element with another number/object that you can set. genius.

function findLongest(array){
    return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
  }
