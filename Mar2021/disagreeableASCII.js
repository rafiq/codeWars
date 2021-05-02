function getWeight(name){
    // return 97 - 65//  name[0].charCodeAt()
    let lettersOnly = name.replace(/[^a-zA-Z]/gi,"")
    return lettersOnly.split("").reduce((acc,curr,idx) => {
        if (curr.toUpperCase() === curr ) acc += curr.charCodeAt() + 32;
        else acc += curr.charCodeAt() - 32;
        return acc;
    },0);

    // return lettersOnly;
  }

  console.log(
    getWeight("Joe"),//254);
    getWeight("CJ"),//205);
    getWeight("cj"),//141);
  )