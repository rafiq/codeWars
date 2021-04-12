function remove(s){
    let newArray = [];

    s = s.split(" ")
    for (let i = 0; i < s.length; i++) {
        newArray.push(removeLastExclamation(s[i]))
    }
    return newArray.join(" ");
  }
  function removeLastExclamation(word) {
    for (let i = word.length - 1; i >= 0; i--) {
        if(word[i] === "!") word = word.slice(0,-1);
        else if (word[i] !== "!") break;
    }

    return word
  }
  console.log(
    remove("Hi!"),// "Hi")
    remove("Hi!!!"),//"Hi")
    remove("!Hi"),// "!Hi")
    remove("!Hi!"),// "!Hi")
    remove("Hi! Hi!"),// "Hi Hi")
    remove("!!!Hi !!hi!!! !hi"),// "!!!Hi !!hi !hi")
  )