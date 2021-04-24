// This was really good and easy way to do this. By using reduce which is what I originally wanted to do and then, just usign the idx parameter to decide on what thing to join the words with. genius

function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      }
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }

//    I knew there was a way to pop this original string and make a new string but I couldn't remember how. This is a good one.
function list(names) {
    var xs = names.map(p => p.name)
    var x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
  }