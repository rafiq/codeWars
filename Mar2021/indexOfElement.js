function find(array, element) {
return array.some((el,index)=>el === element) ? index : "Not found";
  }
  console.log(
      find([1,2,3],3),//2
      find([1,2,3],4),//not found
  )

  return array.includes(element) ? array.indexOf(element) : "Not found";
