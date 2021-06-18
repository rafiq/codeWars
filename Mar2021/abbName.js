function abbrevName(name){
    let array = name.toUpperCase().split(" ");

    return array[0][0] + "." + array[1][0]
    // return name.split(" ").reduce((acc,curr,idx) => {
    //     acc += curr[0];
    //     acc += "."
    //     return acc;
    // },"");

}
console.log(
    abbrevName("Sam Harris"),// "S.H");
    abbrevName("Patrick Feenan"), //"P.F");
    abbrevName("Evan Cole"), //"E.C");
    abbrevName("P Favuzzi"), //"P.F");
    abbrevName("David Mendieta"), //"D.M");
)