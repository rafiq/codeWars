function firstNSmallest(array, n){
    // let result = array.slice();
    // let length = array.length - n ;

    // while (result.length > n) {
    //     let index = array.indexOf(Math.max(...array));
    //     result = array.slice(0, index).concat(array.slice(index + 1))
    //     // console.log(array)
    // }

    // return result;
    for (let i = array.length-n; i > 0; i--) {
        let val = Math.max(...array);
        array.splice(array.lastIndexOf(val),1);
      }
      return array;
  }
  console.log(
    // firstNSmallest([1,2,3,4,5],3),// [1,2,3]);
  firstNSmallest([5,4,3,2,1],3),// [3,2,1]);
//   firstNSmallest([1,2,3,1,2],3),// [1,2,1]);
//   firstNSmallest([1,2,3,-4,0],3),// [1,-4,0]);
//   firstNSmallest([1,2,3,4,5],0),// []);
//   firstNSmallest([1,2,3,4,5],5),// [1,2,3,4,5]);
//   firstNSmallest([1,2,3,4,2],4),// [1,2,3,2]);
//   firstNSmallest([2,1,2,3,4,2],2),// [2,1]);
//   firstNSmallest([2,1,2,3,4,2],3),// [2,1,2]);
//   firstNSmallest([2,1,2,3,4,2],4),// [2,1,2,2]);
  )