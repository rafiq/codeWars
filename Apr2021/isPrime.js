function isPrime(num) {
    let max = Math.sqrt(num);
    if (num <= 1) return false;
    for (let i = 2; i <= max; i++) {
        if (num % i === 0) return false;
    }
    return true;
  }
  console.log(
    // isPrime(0),// false, "0 is not prime");
    // isPrime(1),// false, "1 is not prime");
    isPrime(-5),// false, "1 is not prime");
    isPrime(-41),// false, "1 is not prime");
    // isPrime(2),// true, "2 is prime");
    // isPrime(73),//true, "73 is prime");
    // isPrime(75),//false, "75 is not prime");
    // isPrime(-1),//false, "-1 is not prime");
  )