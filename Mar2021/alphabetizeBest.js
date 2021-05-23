// I had to comment on this one because I did do essentially the same thing, but I left off the fact that the second loop will go through the word letter by letter and add any letters that match it.k

function alphabetized(s) {
    var ans="";
    for (var i=97; i<123; ++i)
      for (var j=0; j<s.length; j++)
        if (s[j].toLowerCase().charCodeAt()==i)
        ans+=s[j]
    return ans
   }