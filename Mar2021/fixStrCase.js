function solve(s){

    if (s.match(/[a-z]/g) && s.match(/[A-Z]/g)) {
        return s.match(/[a-z]/g).length >= s.match(/[A-Z]/g).length ? s.toLowerCase() : s.toUpperCase();
    }
    return s.toLowerCase()
    // return
    // return (s.match(/[a-z]/g).length || 0) >= (s.match(/[A-Z]/g).length || 0) ? s.toLowerCase() : s.toUpperCase() ;
}
console.log(
    solve("code"),//"code");
    solve("CODe"),//"CODE");
    solve("COde"),//"code");
    solve("Code"),//"code");
)