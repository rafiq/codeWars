function replace(s){
    let vowels = "aeiouAEIOU";
    let array = s.split("");
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (vowels.includes(array[i])) newArr.push("!");
        else newArr.push(array[i]);
    }

    return newArr.join("");
  }

console.log(
    replace("Hi!") ,//"H!!")
    replace("!Hi! Hi!") ,//"!H!! H!!")
    replace("aeiou") ,//"!!!!!")
    replace("ABCDE") ,//"!BCD!")
)