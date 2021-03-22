function shorter_reverse_longer(a,b){
    let minStr = a.length < b.length ? a : b;
    let maxStr = a.length > b.length ? a : b;
    if (a.length === b.length) maxStr = a,minStr = b;
    return `${minStr}${maxStr.split("").reverse().join("")}${minStr}`
  }

  console.log(
    shorter_reverse_longer("first", "abcde"),// "abcdetsrifabcde");
    shorter_reverse_longer("hello", "bau"),// "bauollehbau");
    shorter_reverse_longer("abcde", "fghi"),// "fghiedcbafghi");
  )