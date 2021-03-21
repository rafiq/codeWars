function stringTask(s){
    const CONSTONANTS = "bcdfghjklmnpqrstvwxz";
    let noVowels = s.replace(/[aeiouy]/gi,"");

    return noVowels.split("").reduce((acc,curr,idx) => {
        if (curr.toUpperCase() === curr) {
            acc += "." + curr.toLowerCase();
        }
        if (CONSTONANTS.includes(curr)) acc += "." + curr;
        return acc;
    },"")
        // return onlyLowerCaseStr;
}
console.log(
    stringTask("Tour"),//.t.r
    stringTask("aBAcAba"),//'.b.c.b'
    stringTask("Codewars"),//.t.r,ans:'.c.d.w.r.s'},
)