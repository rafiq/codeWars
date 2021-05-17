function solution(pairs){
    let array = Object.entries(pairs);

    return (array.reduce((acc,curr) => {
        acc += curr[0] + " = " + curr[1] + ", "
        return acc;
    },"")).slice(0,-2)
  }
  console.log(
    solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
  )