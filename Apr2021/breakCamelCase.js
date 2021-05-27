function solution(string) {

    return string.split("").reduce((acc,curr) => {
        if (curr >= "A" && curr <= "Z") acc += " " + curr;
        else acc += curr;
        return acc;
    },"")
}

console.log(
    solution('camelCasing'),// 'camel Casing', 'Unexpected result')
    solution('camelCasingTest'),// 'camel Casing Test', 'Unexpected result')
)