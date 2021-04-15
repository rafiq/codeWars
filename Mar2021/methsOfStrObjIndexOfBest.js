
// `here the best answer is best because of its brevity. I like how this one is able to do what i did but it far fewer lines.

function firstToLast(str,c){
    var first = str.indexOf(c), last = str.lastIndexOf(c);
    return first == -1 ? -1 : last - first;
  }