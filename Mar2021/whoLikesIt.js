function likes(names) {
    let sent = "like this";
    let theRest = names.length - 2;
    if (names.length === 0) return "no one likes this";

    if (names.length === 1) return names[0] + " likes this";
    if (names.length === 2) return names[0] + " and " + names[1] + " " + sent;
    if (names.length === 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " " + sent;
    }
    else {
        return names[0] + ", " + names[1] + " and " + theRest + " others like this"
    }
    // return names;
  }
console.log(
    likes([]),//'no one likes this');
    likes(['Peter']),//'Peter likes this');
    likes(['Jacob', 'Alex']),// 'Jacob and Alex like this');
    likes(['Max', 'John', 'Mark']), //'Max, John and Mark like this');
    likes(['Alex', 'Jacob', 'Mark', 'Max']),// 'Alex, Jacob and 2 others like this');
)