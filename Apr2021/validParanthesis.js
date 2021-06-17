function validParentheses(parens){
    let pairCount = 0;

    for (let i = 0; i < parens.length; i++) {
        if (pairCount < 0) return false;
        if (parens[i] === "(" ) pairCount++;
        if (parens[i] === ")") pairCount--;
    }
    return pairCount === 0 ? true : false;
  }
  console.log(
    validParentheses( "()" ),// true);
    validParentheses( "())" ),// false);
  )