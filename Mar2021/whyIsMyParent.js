function findChildren(dancingBrigade){
    let alpha = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    let newStr = "";
    let newArray = dancingBrigade.split("");
    for (let i = 0; i < alpha.length; i++) {
        if (newArray.includes(alpha[i])) {
            newStr += newArray.filter(el => el === alpha[i]).join("")
        }
    }
    return newStr

};
console.log(
    findChildren("beeeEBb"),//"BbbEeee" == );
    findChildren("uwwWUueEe"),//"EeeUuuWww" == );
    )
    // if (alhpa.includes(dancingBrigade[i])) {
        //     newStr += dancingBrigade.match(new RegExp(alhpa[i]),"g").join("")
        // for (let i = 0; i < dancingBrigade.length; i++) {
        //     mapping[dancingBrigade[i]] ? mapping[dancingBrigade[i]]++ : mapping[dancingBrigade[i]] = 1;

        // }
        // let array = Object.entries(mapping);
        // for (let i = 0; i < alhpa.length; i++) {
        //     if (mapping[alhpa[i]] && mapping[alhpa[i]] > 0) {
        //         newStr += alhpa[i]
        //         mapping[alhpa[i]]--;
        //     }
        // }
        //     for (let j = 0; j < dancingBrigade.length; j++) {
        //         if (dancingBrigade[j] === alhpa[i]) {
        //             newStr += dancingBrigade[i]
        //         }
        //     }
        // }
        // return newStr

        // return newStr

    // }