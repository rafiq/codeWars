function validBraces(braces){
    let stack = [];
    let allOpen = "{[("
    let hash = {
        "{":"}",
        "[":"]",
        "(":")"
    }
    for (let i = 0; i < braces.length; i++) {
        if (allOpen.includes(braces[i])) stack.push(braces[i])
        else {
            if (hash[stack.pop()]!== braces[i]) return false;
        }
    }

    return stack.length > 0 ? false : true ;
  }
  console.log(
    validBraces( "()" ), //true),
    validBraces( "([({[()]})])" ), //true),
    validBraces( "[(])" ), //false),
    validBraces( "(((({{" ), //false),
  )