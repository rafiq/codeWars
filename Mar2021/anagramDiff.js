function anagramDifference(w1,w2){


    let w1Arr = w1.split("");
    let w2Arr = w2.split("");

    for (let i = 0; i < w1Arr.length; i++) {
        if (w2Arr.includes(w1Arr[i])) {
            w2Arr[w2Arr.indexOf(w1Arr[i])] = ""
            w1Arr[i] = "";
        }
    }

    for (let i = 0; i < w2Arr.length; i++) {
        if (w1Arr.includes(w2Arr[i])) {
            w1Arr[w1Arr.indexOf(w2Arr[i])] = ""
            w2Arr[i] = "";
        }
    }
    return w1Arr.join("").length + w2Arr.join("").length;

 }
 console.log(
    anagramDifference("",""),//0);
    anagramDifference("a",""),//1);
    anagramDifference("", "a"),//1);
    anagramDifference("ab","a"),//1);
    anagramDifference("ab","cd"),//4);
    anagramDifference("aab","a"),//2);
    anagramDifference("a","aab"),//2);
    anagramDifference("codewars","hackerrank"),//10);
 )

     // for (let i = 0; i < w1.length; i++) {
    //     for (let j = 0; j < w2.length; j++) {
    //         if (w1[i] !== w2[j]) count++;
    //     }
    // }
    // return w1.split("").filter(letter => letter === w2[0]);