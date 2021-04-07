function narcissistic(value) {

    let power ;
    if ( String(value)) power = String(value).length;
    let sum = value.toString().split("").reduce((acc,curr) => {
        acc += Math.pow(curr,power);
        return acc;
    },0)
    return value === sum;
  }
  console.log(
    narcissistic( 7 ),// true, "7 is narcissistic" );
  narcissistic( 371 ), //true, "371 is narcissistic" );
  )