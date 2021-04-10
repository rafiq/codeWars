function switcher(x){
    let alphaStr = " ?!abcdefghijklmnopqrstuvwxyz ";
    alphaStr = alphaStr.split("").reverse().join("")

    return x.reduce((acc,curr,idx,arr) => {

        acc += alphaStr[Number(curr)]
        return acc;
    },"");
}
console.log(
    switcher(['24', '12', '23', '22', '4', '26', '9', '8']),//// 'codewars');
    switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']),//// 'btswmdsbd kkw');
    switcher(['4', '24']),//// 'wc');
)