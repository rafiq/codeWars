function timeCorrect(timestring) {
    if (timestring === null || !timestring) return "";
    let result = "";

    // for (let i = 0; i < timestring.length; i++) {
    //     if (typeof +timestring[i] === "number")
    // }

    let digitsArray = timestring.split(/:|;/gi);

    if (digitsArray.length < 3) {
        digitsArray.push(digitsArray.join("").slice(0,2))
        digitsArray.push(digitsArray.join("").slice(2,4))
        digitsArray.push(digitsArray.join("").slice(4,6))
        digitsArray.shift()
    }
    return digitsArray
  }
  console.log(
    timeCorrect(null),//null);
    timeCorrect(""),//"");
    timeCorrect("001122"),//null);
timeCorrect("00;11;22"),//null);
timeCorrect("0a:1c:22"),//null);
  )


  function timeCorrect(timestring) {
    if(!timestring) {
        return timestring;
    };

    if (!/\d\d:\d\d:\d\d/.test(timestring)) {
      return null
   }
   arr = timestring.split(':');

    if(arr[2] > 59) {
        var least = Math.floor(arr[2] / 60);
        arr[2] = arr[2] % 60;
        arr[1] = 1*arr[1] + least;
    }
    if(arr[1] > 59) {
        least = Math.floor(arr[1] / 60);
        arr[1] = arr[1] % 60;

        arr[0] = 1*arr[0] + least;
        console.log(arr[0]);
    }
    if(arr[0] > 23) {
        arr[0] = arr[0] % 24;

    }

    return arr.map(function(item){
        if (item < 10 && (typeof item == 'number')) {
            item = '0' + item;
        }
        return item;
    }).join(':');
}