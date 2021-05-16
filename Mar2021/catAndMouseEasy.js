function catMouse(x){
    return x.indexOf("m") - x.indexOf("C") > 3 ? "Escaped!" : "Caught!";
  }
  console.log(
    catMouse('C....m'),// "Escaped!");
    catMouse('C..m'),// "Caught!");
    catMouse('C.....m'),// "Escaped!");
  )