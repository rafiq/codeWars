function wave(str){
    let array = [];
    let spaceIndex = [];

    for (let i = 0; i < str.length; i++) {
        array.push(str);
        if (str[i] === " ") spaceIndex.push(i);
    }
    let result = array.map((word,idx) => {
            return word.slice(0,idx) + word[idx].toUpperCase() + word.slice(idx + 1)
    });

    return result.filter((element,idx) => !spaceIndex.includes(idx))
  }
console.log(
    wave("hello"),//["Hello", "hEllo", "heLlo", "helLo", "hellO"];
    wave("this is a few words"),//
)
