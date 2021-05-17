function caffeineBuzz(n){
    // if (n % 3 === 0 && n % 2 === 0 && !n % 4 === 0) return "JavaScript";
    // else if (n % 4 === 0 && n % 2 === 0 && n % 3 === 0) return "CoffeeScript";
    // else if (n % 4 === 0 && n % 3 === 0) return "Coffee";
    // else if (n % 3 === 0) return "Java";
    // else return "mocha_missing!"

    // return n;
    if (n % 12 == 0)
    return 'CoffeeScript'
  if (n % 6 == 0)
    return 'JavaScript'
  if (n % 3 == 0)
    return 'Java'
  else return 'mocha_missing!'
}
console.log(
    caffeineBuzz(1) ,//"mocha_missing!"
    caffeineBuzz(3) ,//"Java"
    caffeineBuzz(6) ,//"JavaScript"
    caffeineBuzz(12),//"CoffeeScript"
)