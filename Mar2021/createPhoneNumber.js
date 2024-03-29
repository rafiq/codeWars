function createPhoneNumber(numbers){



    return numbers.reduce((acc,curr,idx) => {

        if (idx === 0) acc += "(";
        if (idx === 3) acc += ") ";
        if (idx === 6) acc += "-";
        acc += curr;

        return acc;
    },"");
}

console.log(
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),//"(123) 456-7890");
    createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),//"(111) 111-1111");
    createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),//"(123) 456-7890");
)