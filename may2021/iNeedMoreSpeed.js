function reverse(arr) {
    let j = arr.length - 1;

    for (let i = 0; i < j; i++) {
        let temp = arr[i]
         arr[i] = arr[j]
         arr[j] = temp
         j--;
    }
    return arr
    // ! destructuring ended up being too slow to pass this kata. I guess swaps are much faster.
    // [arr[i],arr[j]] = [arr[j],arr[i]];
    j--;
 }
 console.log(
    reverse([1,2,3,4,5]),//[5,4,3,2,1]
    reverse({a:1},{b:2}),//
    reverse(['hello','world','how','are','you','?']),//['?',',you','are','how','world','hello']]
 )