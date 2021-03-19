// Here is another nice piece of work. I like how they used the while looop and spliced the original array using the mutating method of push which is genius.

var splitInParts = function(s, partLength){
    var parts = [];
    var array = s.split('');
    while(array.length) {
      parts.push(array.splice(0,partLength).join(''));
    }
    return parts.join(' ');
  }