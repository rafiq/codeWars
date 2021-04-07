function nbDig(n, d) {
    return new Array(n + 1).fill(0).reduce((acc,curr,idx) => {
        acc.push(idx**2);
        return acc;
    },[]).reduce((acc,curr) => {
        if (String(curr).includes(d)) {
            acc += String(curr).split(d).length - 1;
        }
        return acc;
    },0)
    // // let regex = (d,"g")
    // return String(n).match(new RegExp(regex)) ? String(n).match(regex).length : 0;
    // var res=0;
    // for (var g=0;g<=n;g++){
    //   var square=(g*g+"").split("");
    //   square.forEach((s)=>s==d?res++:null)
    // }return res;
}
console.log(
    nbDig(5750, 0),// 4700)
    nbDig(11011, 2),// 9481)
    nbDig(12224, 8),// 7733)
    nbDig(11549, 1),// 11905)
)