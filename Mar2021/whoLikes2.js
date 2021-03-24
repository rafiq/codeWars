function likes(names) {
    let length = names.length;
    switch (length) {
        case 0:
            return "no one likes this";
            break;
        case 1:
            return `${names[0]} likes this`;
            break;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
            break;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
            break;

        default:
            return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
            break;
    }

    // return
  }
  console.log(
    likes([]),//'no one likes this');
    likes(['Peter']),//'Peter likes this');
    likes(['Jacob', 'Alex']),//'Jacob and Alex like this');
    likes(['Max', 'John', 'Mark']),//'Max, John and Mark like this');
    likes(['Alex', 'Jacob', 'Mark', 'Max',"Frank","Mary"]),//'Alex, Jacob and 2 others like this');
  )