function decipherThis(str) {

    let wordArray = str.split(" ").map(word => getFirstLetter(word));
    return wordArray.map(word => word.split("").reduce((acc,curr,idx) => {

        if (word.length > 2) {
            if (idx === 1) acc += word[word.length - 1];
            else if (idx === word.length - 1) acc += word[1];
            else acc += curr;
        } else acc += curr;
        // acc += curr;
        return acc;
    },"")).join(" ")

    }

    function getFirstLetter(str) {
        return String.fromCharCode(+str.replace(/[a-z]/g,"")) + str.replace(/[0-9]/g,"")
    }

    console.log(
        decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'),// 'Have a go at this and see how you do');
    )