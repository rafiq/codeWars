function removeChar(str){
    let array = str.split("");
    array.shift();
    array.pop();
    return array.join("");

   };
console.log(
    removeChar('eloquent'),// 'loquen');
    removeChar('country'),// 'ountr');
    removeChar('person'),// 'erso');
    removeChar('place'),// 'lac');
)