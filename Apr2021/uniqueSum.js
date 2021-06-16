function uniqueSum(lst){
    if (lst.length === 0) return null;
    let set = new Set(lst)
    return [...set].reduce((acc,curr) => acc + curr,0);
  }
  console.log(
    uniqueSum([1,2,3]),// 6)
    uniqueSum([1,3,8,1,8]),// 12)
    uniqueSum([-1,-1,5,2,-7]),// -1)
    uniqueSum([]),// null)
  )