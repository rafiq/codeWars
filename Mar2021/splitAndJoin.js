function split(arr){

    let result = [[],[]];
    arr.forEach(array => {
        array.forEach(num => {
            result[0].push(num)
        })
    });
    arr.forEach(array => {
        result[1].push([array.length])
    })
    return result;

  }

  function join(arr1,arr2){
    // let result = [];

    return arr2.reduce((acc,curr,idx) => {
        acc.push(arr1.splice(0,curr))
        return acc;
    },[])

    // return result;
  }
  console.log(
    split([[1],[2,3],[4,5,6],[7,8,9,10]]),// [[1,2,3,4,5,6,7,8,9,10],[[1],[2],[3],[4]]])
    split([[1,3,5],[2,4,6],[7,8,9]]),// [[1,3,5,2,4,6,7,8,9],[[3],[3],[3]]])
    // join([1,2,3,4,5,6,7,8,9,10],[[1],[2],[3],[4]]) , //[[1],[2,3],[4,5,6],[7,8,9,10]])
    // join([1,3,5,2,4,6,7,8,9],[[3],[3],[3]]) , //[[1,3,5],[2,4,6],[7,8,9]])
  )