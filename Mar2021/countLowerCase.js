function lowercaseCount(str){
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= "a" && str[i] <= "z") count++;
    }
    return count;
}


console.log(
lowercaseCount("abc"),// ===> 3

lowercaseCount("abcABC123"),// ===> 3

lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"),// ===> 3

lowercaseCount(""),// ===> 0;

lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"),//===> 0

lowercaseCount("abcdefghijklmnopqrstuvwxyz"),//===> 26
)