function findNb(m) {
    let sum = 0;

    for (let i = 1; i < m; i++){
        sum += i**3
        if (sum === m) return i;
        if (sum > m) return -1;
    }
    return -1;
}
console.log(
    findNb(4183059834009),// 2022)
    findNb(24723578342962),// -1)
    findNb(135440716410000),// 4824)
    findNb(40539911473216),// 3568)
)

function findNb(m) {
    let n = 0;
    let sum = 0;
    while (sum < m) {
      n++;
      sum += Math.pow(n, 3);
    }
    return sum === m ? n : -1;
  }