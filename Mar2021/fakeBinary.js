function fakeBin(x){

    return x.split("").reduce((acc,curr) => {

        Number(curr) >= 5 ? acc += "1" : acc += "0";

        return acc;
    },"")
}
console.log(

        fakeBin('45385593107843568'), //'01011110001100111');
        fakeBin('509321967506747'), //'101000111101101');
        fakeBin('366058562030849490134388085'),// '011011110000101010000011011');
)