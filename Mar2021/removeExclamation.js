function remove(s){

    let array = s.split("")

    if (array[array.length - 1] === "!") array.pop();


    return array.join("");


}

console.log(
    remove("Hi!"),// "Hi")
    remove("Hi!!!"),//"Hi!!")
    remove("!Hi"),// "!Hi")
    remove("!Hi!"),// "!Hi")
    remove("Hi! Hi!"),// "Hi! Hi")
    remove("Hi"),// "Hi")
)