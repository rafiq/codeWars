function missingValues(arr) {




    let mapping = arr.reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})

    return Object.entries(mapping).reduce((acc,curr,idx) => {
        if (curr[1] === 1) acc *= Number(curr[0])**2;
        if (curr[1] === 2) acc *= Number(curr[0])

        return acc;
    },1)
  }
  console.log(
    missingValues([1, 1, 1, 2, 2, 3]),//18)

    missingValues([96, 56, 24, 46, 75, 46, 75, 21, 46, 21, 75, 96, 56, 96, 56]),//12096)

    missingValues([27, 65, 44, 39, 44, 21, 21, 44, 65, 39, 21, 65]),//28431)

    missingValues([66, 4, 80, 66, 4, 83, 97, 81, 19, 4, 80, 51, 83, 81, 83, 66, 51, 80, 97, 81, 97]),//18411)

    missingValues([60, 76, 86, 76, 86, 53, 60, 88, 71, 71, 71, 86, 88, 76, 88, 17, 60, 26, 17, 17, 26, 53, 98, 53]),//249704)

    missingValues([42, 23, 45, 33, 33, 19, 42, 79, 79, 23, 95, 95, 79, 19, 42, 33, 19, 23]),//192375)

    missingValues([4, 74, 41, 41, 41, 88, 63, 35, 35, 4, 88, 13, 63, 74, 63, 88, 4, 74]),//5915)

  )