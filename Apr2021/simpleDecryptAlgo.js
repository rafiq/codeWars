function decrypt(params) {
    let alphabetStr = "abcdefghijklmnopqrstuvwxyz";
    let alphaMapping = params.split("").reduce((acc,curr) => {
        curr >= "a" && curr <= "z" && acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})

    return alphabetStr.split("").reduce((acc,curr) => {
        if (alphaMapping[curr]) {
            acc += String(alphaMapping[curr])
        } else acc += "0";
        return acc;
    },"")
}
console.log(
    decrypt('$aaaa#bbb*ccfff!z') ===  '43200300000000000000000001',
decrypt('z$aaa#ccc%eee1234567890') ===  '30303000000000000000000001',
)