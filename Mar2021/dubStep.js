function songDecoder(song){

    // let regex1 = new RegExp("WUB","g");

    // return song.replace(regex1," ").replace();

    // let arr = song.split("WUB").join(" ").split("");
    // let isStreak = false;

    // for (let i = 0; i < arr.length; i++){

    //     if (arr[i] === " " && isStreak === false) {
    //         isStreak = true;
    //         arr[i] = " ";
    //     } else if (arr[i] === " " && isStreak === true) {
    //         arr[i] = "";
    //     } else if (arr[i] !== " ") isStreak = false;
    // }
    // return arr.join("").trim();

    return song.split('WUB');

  }
console.log(
    songDecoder("AWUBBWUBC"),//"A B C","WUB should be replaced by 1 space");
    songDecoder("AWUBWUBWUBBWUBWUBWUBC"),//"A B C","multiples WUB should be replaced by only 1 space");
    songDecoder("WUBAWUBBWUBCWUB"),//"A B C","heading or trailing spaces should be removed");
)