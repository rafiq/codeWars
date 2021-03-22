function toWeirdCase(string){


    return string.toLowerCase().split(" ").map(word => {
        return word.split("").reduce((acc,curr,idx) => {
            if (idx % 2 === 0) acc += curr.toUpperCase();
            else acc += curr;
            return acc;
        },"")
    }).join(" ");
  }
  console.log(
    toWeirdCase('This'),//'ThIs');
    toWeirdCase('is'),//'Is');
    toWeirdCase('This is a test'),//'ThIs Is A TeSt');
  )