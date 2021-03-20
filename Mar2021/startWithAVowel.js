function vowelStart(str){

    let vowels = "aeiou"
    return str.toLowerCase().replace(/[^a-z0-9]/g,"").split("").reduce((acc,curr,idx) => {
        if (vowels.includes(curr) && idx !== 0) {
            acc += " ";
            acc += curr
        } else acc += curr;

        return acc;
    },"");
    }
    console.log(
        vowelStart('Coding is great'),//'c od ing isgr e at',)
        vowelStart('my number is 0208-533-2325'),//'myn umb er is02085332325' ,)
        vowelStart('oranges, apples, melon, pineapple'),// 'or ang es appl esm el onp in e appl e', )
        vowelStart('under_score'),// 'und ersc or e')
    )