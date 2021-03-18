function minimumNumber(numbers){


    let sumOfArray = numbers.reduce((acc,curr) => acc += curr,0);
    let nextPrime = 0;
    for (let i = sumOfArray; i < sumOfArray**2; i++) {
        if (isPrime(i)) {
            nextPrime = i;
            break;
        }
    }
    return nextPrime - sumOfArray;
  }
  function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }
  console.log(
    minimumNumber([3,1,2]),//1);
    minimumNumber([5,2]),//0);
    minimumNumber([1,1,1]),//0);
    minimumNumber([2,12,8,4,6]),//5);
    minimumNumber([50,39,49,6,17,28]),//2);
  )