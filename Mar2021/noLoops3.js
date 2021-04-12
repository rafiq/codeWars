function copy(array, start, stop, place){
    // return array.slice(0,place).concat(array.slice(start,stop)).concat(array.slice(place + array.slice(start,stop).length)).slice(0,array.length)
    array.splice(place, stop-start,...array.slice(start,stop))
    return array
    // return array.slice(0,place).concat(array.slice(start,stop)).concat()
  };
  console.log(
    // copy([1, 2, 3, 4, 5], 0, 2, -2),// [1, 2, 3, 1, 2]);
    // copy([1, 2, 3, 4, 5], 3, 4, 0),// [4, 2, 3, 4, 5]);
    // copy([1, 2, 3, 4, 5], -1, -2, -3),// [1, 2, 3, 4, 5]);
    copy([ 17, 7, 19, 17, 6, 12, 4, 17, 7, 19, 17, 6, 12, 4, 14 ], -15, -1, -8),// [17, 7, 19, 17, 6, 12, 4, 17, 7, 19, 17, 6, 12, 4, 14];

    // copy(["Banana", "Orange", "Apple", "Mango"], 0, 2, 2),// ["Banana", "Orange", "Banana", "Orange"]);
    // copy(["C", "W", "W", "W"], 1, 2, 0),// ["W", "W", "W", "W"]);
    // copy(["Hackathon", "Katathon", "Code", "CodeWars", "Laptop", "Macbook", "JavaScript"], 1, 5, 2),// ["Hackathon","Katathon","Katathon","Code","CodeWars","Laptop","JavaScript"]);
  )