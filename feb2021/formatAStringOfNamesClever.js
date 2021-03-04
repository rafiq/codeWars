// Again, this is  pretty clever using reduce method to put together this array. I was trying to do that but I did not know I could put the conditional in here like this. AH SO this one is utilizing the index parameter from reduce and that is the signal to the conditional that it is time to put a ampersand as opposed to the index of the for loop that I did. Though I could have used mine the same way as this one, because they do the exact same thing.

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

//    Wow, this is a pretty cool one that is doing the new array by pop ing the . I need this one explained to me.
function list(names) {
    var xs = names.map(p => p.name)
    var x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
  }
//   This is one I can understand and it is pretty smooth. I like how they mutated in-place.
function list(names) {
    var result = "";
    var comma = ", ";
    var and = " & ";
    while (names.length) {
        result += names.shift().name;
        if (names.length == 1) {
            result += and;
        } else if (names.length > 1) {
            result += comma;
        }
    }

    return result;
}
// Another nice one
function list( names ){
    return names.reduce(function(prev, curr, i, arr){
      return prev + curr.name + (i<arr.length-2?', ':i==arr.length-2?' & ':'');
    }, '');
  }