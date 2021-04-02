function validBraces(braces){


    return braces.split("").reduce((acc,curr,idx,arr) => {
        if (arr[idx] === "(" && arr[idx + 1] !== ")") return false;
        else if (arr[idx] === "{" && arr[idx + 1] !== "}") return false;
        else if (arr[idx] === "[" && arr[idx + 1] !== "]") return false;
        else return true;
    })
  }
  console.log(
    validBraces( "()" ),// true);
    validBraces( "[(])" ),// false);
  )