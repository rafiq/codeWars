function primeFactors(n){
    let primes = [];
    let results = [];
    let limit = Math.pow(n,.5);

    for (let i = 0; i < limit; i++) {
        if (getPrime(i)) {
            primes.push(i)
        }
    }

    primes.forEach(el => {
        if (n % el === 0) {
            results.push(el);
            n = n / el;
        }
    })
    return results;
}
function getPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false;
    return num > 1;
}
console.log(
    primeFactors(7775460),//"(2**2)(3**3)(5)(7)(11**2)(17)")
)
const primeFactors = n => {
    if (n < 2) return `(${n})`;
    let factors = '';
    for ( let i = 2; i <= n; i++) {
      let count = 0;
      while ( n%i === 0 ) {
        count++;
        n /= i;
      }
      if (count) {
        factors += `(${i}`;
        if (count > 1) factors += `**${count}`;
        factors += `)`;
      }
    }
    return factors;
  }