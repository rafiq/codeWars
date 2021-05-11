function uncensor(infected, discovered) {
    let newStr = "";
    let j = 0;
    let arr = discovered.split("");

    for (let i = 0; i < infected.length; i++) {
        if (infected[i] === "*") {
            newStr += arr.shift();
            j++;
        } else newStr += infected[i];
    }
    return newStr;
    // return [...discovered]
  }
  console.log(
    uncensor('*h*s *s v*ry *tr*ng*', 'Tiiesae'),// 'This is very strange'],
    uncensor('A**Z*N*', 'MAIG'),// 'AMAZING'],
    uncensor('xyz', ''),// 'xyz'],
    uncensor('', ''),// ''],
    uncensor('***', 'abc'),// 'abc'])
  )