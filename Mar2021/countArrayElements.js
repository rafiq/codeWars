function count(array){


    return array.reduce((acc,curr) => {
       acc[curr] ? acc[curr]++ : acc[curr] = 1;
       return acc;
    },{})
  }


  console.log(
    count(['a', 'a', 'b', 'b', 'b']),// { 'a': 2, 'b': 3 })
  )