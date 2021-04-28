function expressionMatter(a, b, c) {
    // let max = 0;
    // let newArray = [a,b,c];
    // for (let i = 0; i < newArray.length; i++) {
    // return   a * b + c > max ? max = a * b + c : a + b * c > max ? max = a + b * c : a * b * c > max ? max = a * b * c : (a + b) * c > max ? max = (a + b) * c  : a * (b + c) > max ? max = a * (b + c) : a + b + c > max ? max = a + b + c : max;
    // // }
    // return max;
    return  Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c))

  }
  console.log(
    expressionMatter(2, 1, 2),//6);
    expressionMatter(5 ,1, 3),//20);
    expressionMatter(2, 1, 1),//4);
    expressionMatter(1, 1, 1),//3);
    expressionMatter(1, 2, 3),//9);
    expressionMatter(1, 3, 1),//5);
    expressionMatter(2, 2, 2),//8);
  )