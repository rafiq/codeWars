// I do like this one for using match, but I am not a fan of regex.

function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}

// I like the below one because it is the same as mine but with less lines of code because they only had to look for letters greater than "m"
function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
      if (s[i] > "m") {
        count++;
      }
    }
    return count+"/"+s.length;
}