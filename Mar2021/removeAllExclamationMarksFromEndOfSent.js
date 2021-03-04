function remove(s){
    let array = s.split("");

    while (array[array.length - 1 ] === "!") {
        array.pop();
    }
    return array.join("");
  }
  console.log(
    remove("Hi!"),//"Hi"),
    remove("Hi!!!"),//"Hi"),
    remove("!Hi"),//"!Hi"),
    remove("!Hi!"),//"!Hi"),
    remove("Hi!_Hi!"),//"Hi! Hi"),
    remove("Hi"),//"Hi"),
  )