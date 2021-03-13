function spinWords(str){


    let newStr = str.split(" ").reduce((acc,curr) => {
        if (curr.length >= 5) acc += curr.split("").reverse().join("") + " "
        else acc += curr + " ";
        return acc;
    },"")

    return newStr.trim();
  }

  console.log(
    spinWords("Welcome"),// "emocleW");
    spinWords("Hey fellow warriors"),// "Hey wollef sroirraw");
    spinWords("This is a test"),// "This is a test");
    spinWords("This is another test"),// "This is rehtona test");
    spinWords("You are almost to the last test"),// "You are tsomla to the last test");
    spinWords("Just kidding there is still one more"),// "Just gniddik ereht is llits one more");
    spinWords("Seriously this is the last one"),// "ylsuoireS this is the last one");
  )