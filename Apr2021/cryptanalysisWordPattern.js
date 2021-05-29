
function wordPattern(word) {
    // return Object.values(word.split("").reduce((acc,curr,idx) => {
    //     acc[curr] ? acc[curr] : acc[curr] = idx;
    //     return acc;
    // },{}))

    // let set = new Set([...word]);
    // let numArray = Array.from(set);

    // for (let idx in numArray) {

    // }
    let cryptArray = [];
    let count = 0;
    let hash = {};

    word = word.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (!cryptArray.includes(word[i])) {
            cryptArray.push(word[i])
            hash[word[i]] = count;
            count++;
        }
    }

    return word.split("").reduce((acc,curr) => {
        acc.push(hash[curr])
        return acc;
    },[]).join(".")
  }
  console.log(
    wordPattern("hello"),// "0.1.2.2.3");
    wordPattern("heLlo"),// "0.1.2.2.3");
    wordPattern("helLo"),// "0.1.2.2.3");
    wordPattern("Hippopotomonstrosesquippedaliophobia"),// "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13");
  )

//   I was so close to doing the shortest answer!!! ARRGH! The step that I did not know was the set.indexOf step which I didn't know that one could do in the set method, but now I do. Thanks Code Wars. !!! Well I guess the new Set is only an array, so I should have knonwn that becasue that is not unique to sets only.
// const wordPattern = (word)=>{
//     word=word.toLowerCase()
//     const set = [...new Set(word)]
//     return word.split('').map(e=>set.indexOf(e)).join('.')
//   }