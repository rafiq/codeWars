function distinct(a) {


    let set = new Set();
    for (let num of a) {
        set.add(num)
    }
    return [...set];
    // for (let i = 0; i < a.length; i++) {
    //     if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) a.splice(i,1);
    // }
    // return a;
  }

  console.log(
    distinct([1]),// [1]);
    distinct([1,2]), //[1,2]);
    distinct([1,1,2]), //[1,2]);
    distinct([3,3,1,1,2]), //[1,2]);
  )