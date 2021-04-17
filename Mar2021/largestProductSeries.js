function greatestProduct(input) {


    let productOfDigits = input.split("").reduce((acc,curr,idx) => {
        acc.push(input.substr(idx,5))
        return acc;
    },[]).reduce((acc,curr,idx) => {
        if (curr.length === 5) {
            acc.push(curr.split("").reduce((a,b) => a *= Number(b),1))
        }
        return acc;
    },[])

    return Math.max(...productOfDigits)
  }
  console.log(
    greatestProduct("123834539327238239583"),//3240,//'The method gave a wrong answer');
    greatestProduct("92494737828244222221111111532909999"),//5292,//'The method gave a wrong answer');
    greatestProduct("92494737828244222221111111532909999"),//5292);
    greatestProduct("92494737828244222221111111532909999"),//5292);
    greatestProduct("02494037820244202221011110532909999"),//0);
  )