// This is a great answer. Genius. I love how they just lowercased, sorted and then just compared the two strings because if the are the same, then the letters sorted would directly match the letters of the both strings. Genius.


var isAnagram = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t==o)?true:false;
  };