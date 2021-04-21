function filterHomogenous(arrays) {


    let newArray = arrays.map(array => {
        let originalType = typeof array[0];
        if (array.every(el => typeof el === originalType) && array.length > 0) return array
    });

    return newArray.filter(el => el !== undefined)
  }
  console.log(
    filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]),// [[1, 5, 4], ['b']]);
    filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []]), //[[123, 234, 432], ['', 'abc'], [''], ['', '1']]);
  )



    // arrays.forEach(element => {

    //     if (element.every(one => (typeof one === "string" && !typeof one === "number") || (typeof one === "string" && !typeof one === "number"))) newArray.push(element);
    // });