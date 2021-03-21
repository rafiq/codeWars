// Here is what I was trying to do originally but I was having difficulty because I was trying to add the global flag g but I coudldn't since I was passing in an object by reference. Below they used the new RegExp method which does allow to tag on the g flag at the end.

// ? I think it is good to note the use of the || operator which would make this return the values, or at least an empty array in this instance.

function solution(fullText, searchText){
    return (fullText.match(new RegExp(searchText, 'g')) || []).length;
  }