function solution(fullText, searchText){
    let reg = searchText;
    if (!fullText || fullText.length === 1) return 0;
    return fullText.match(new RegExp(searchText,"gi")).length;
  }

  console.log(
    solution('abcdeb','b'),// 2);
    solution('abc','b'),// 1);
    solution('abbc','bb'),// 1);
  )