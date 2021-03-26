function shifter(s){
    const shifters = "HINOSXZMW";
    if (s.length === 0) return 0;
    let set = new Set(s.split(" "))
    let uniqueArray = [];
    let count = 0;
    for (let el of set) {
        uniqueArray.push(el);
    }
    uniqueArray.forEach(word => {
        if (word.split("").every(letter => shifters.includes(letter))) count++
    })

    return count;
  }
  console.log(
    shifter("ON"),// 1, "Wrong result. It should be 1" );


   shifter("OS IS UPDATED"),// 2, "Wrong result. It should be 2" );

//`Testing for string "WHO IS WHO"`,()=>{
   shifter("WHO IS WHO"),// 2, "Wrong result. It should be 2" );

//`Testing for string "JS"`,()=>{
   shifter("JS"),// 0, "Wrong result. It should be 0" );

  //`Testing for string "I III I III"`,()=>{
   shifter("I III I III"),// 2, "Wrong result. It should be 2" );

//`Testing for empty string ""`,()=>{
   shifter(""),// 0, "Wrong result. It should be 0" );
  )