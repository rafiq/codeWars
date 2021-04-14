function solution(number){


    let array = [];

    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) array.push(i);
    }

    return array.reduce((acc,curr) => acc += curr,0);
}
console.log(
    solution(10),//
    solution(20),//
    solution(5),//
)