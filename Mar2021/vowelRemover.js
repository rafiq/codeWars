function shortcut(string){
    let vowels = "aeiou";

    return string.split("").reduce((acc,curr) => {
        if (vowels.includes(curr)) acc = acc;
        else acc += curr;
        return acc;
    },"")
}
console.log(
    shortcut('hello') ,//'hll', 'encode failed. Your result: '+shortcut('hello')+' Expected result: hll')
    shortcut('how are you today?') ,//'hw r y tdy?', 'shortcut did not work properly');
    shortcut('complain') ,//'cmpln', 'shortcut did not work properly');
    shortcut('never') ,//'nvr', 'shortcut did not work properly');
)