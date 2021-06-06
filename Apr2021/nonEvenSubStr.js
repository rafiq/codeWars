function solve(s){
    let subStrArray = [];

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            subStrArray.push(s.slice(i,j))
        }
    }
    return subStrArray.filter(el => Number(el[el.length - 1]) % 2 === 1).length
    };

    console.log(
        solve("385459859249118796819883786215"),//253;
        // solve("1341"),//7);
        // solve("1357"),//10);
        // solve("13471"),//12);
        // solve("134721"),//13);
        // solve("1347231"),//20);
        // solve("13472315"),//28);
    )