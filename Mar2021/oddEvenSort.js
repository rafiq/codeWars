function sortMyString(S) {

    let evensArray = [];
    let oddsArray = [];

    S.split("").reduce((acc,curr,idx,arr) => {
        if (idx % 2 === 0) evensArray.push(curr);
        else oddsArray.push(curr);
        return acc;
    },[" "]);
    return evensArray.concat(" ").concat(oddsArray).join("");
}
console.log(
    sortMyString("CodeWars"),// "CdWr oeas");
    sortMyString("YCOLUE'VREER"),// "YOU'RE CLEVER");
)