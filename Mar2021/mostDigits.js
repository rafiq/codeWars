function findLongest(array){


    let lengthArray = array.map(el => String(el).length);

    return array[lengthArray.indexOf(Math.max(...lengthArray))]

  }
  console.log(
    findLongest([1, 10, 100]),//100)
    findLongest([9000, 8, 800]),//9000)
    findLongest([8, 900, 500]),//900)
  )