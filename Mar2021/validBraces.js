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

//   This one was a little difficult though I do understand that it is merely a stack where we are adding on the stack if we see an open brace and then popping off the stack if we find the closing brace and they need to be in the same order that they came in on last one in is first one out.
function validBraces(braces){
    var matches = { '(':')', '{':'}', '[':']' };
    var stack = [];
    var currentChar;

    for (var i=0; i<braces.length; i++) {
      currentChar = braces[i];

      if (matches[currentChar]) { // opening braces
        stack.push(currentChar);
      } else { // closing braces
        if (currentChar !== matches[stack.pop()]) {
          return false;
        }
      }
    }

    return stack.length === 0; // any unclosed braces left?
  }