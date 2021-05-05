function deleteNth(arr,n){
    let result = [];

    let mapping = arr.reduce((acc,curr) => {
        // acc[curr] ? acc[curr]++ : acc[curr] = 1;
         acc[curr] = n;
        return acc;
    },{})

    arr.forEach(num => {
        if(mapping[num] && mapping[num] <= n) {
            result.push(num)
            mapping[num]--;
        }
    })
    return result
  }
  console.log(
    deleteNth([20,37,20,21], 1),// [20,37,21])
    deleteNth([1,1,3,3,7,2,2,2,2], 3),// [1, 1, 3, 3, 7, 2, 2, 2])

  )
//   Since we are filter through the number filter is a great method to use. I didn't know that we could make the hash table in filter and then immediately use it.
function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
  }