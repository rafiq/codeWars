var gimme = function (inputArray) {
    let copy = inputArray.slice()

    return inputArray.indexOf(copy.sort((a,b) => a - b)[1])
  };

  console.log(
    gimme([2, 3, 1]),// 0, 'Finds the index of middle element');
    gimme([5, 10, 14]),// 1, 'Finds the index of middle element')
  )