function magicalWell(a, b, n) {

    let sum = 0;
    while (n > 0) {
        sum += a * b;
        a++;
        b++;
        n--;
    }
    return sum;
    const NAME = 'Victor';
    console.log('Good Morning, ' + NAME);
    console.log('Good Afternoon, ' + NAME);
    console.log('Good Evening, ' + NAME);

    NAME = 'Joe';
    console.log('Good Morning, ' + NAME);
    console.log('Good Afternoon, ' + NAME);
    console.log('Good Evening, ' + NAME);

  }
  console.log(
    magicalWell(1,2,2),// 8)

    magicalWell(1,1,1),// 1)

    magicalWell(6,5,3),// 128)
  )

/*
    x = 0;
console.log(x);
var x = 5;
//logs 0 to console


The variable x is being re-assigned to the value of zero since var is a hoisted variable and is initialized to x below the console log. So when console log is invoked, it will log the value 0 due to being re assigned before the console log is executed.
*/