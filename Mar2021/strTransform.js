function stringTransformer(str) {



    return str.split(" ").reverse().join(" ").split("").reduce((acc,curr) => {
        if (curr.toUpperCase() === curr) acc += curr.toLowerCase();
        else acc += curr.toUpperCase();
        return acc;
    },"")
  }

  console.log(
    stringTransformer('Example string'), //'STRING eXAMPLE');
  )