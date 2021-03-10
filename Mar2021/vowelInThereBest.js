// I really like this solution which is similar to mine except they compacted the whole thing I did into one line. I didn't use includes and nor a conditional.

const isVow = a => a.map(x=>'aeiou'.includes(y=String.fromCharCode(x)) ? y : x)

// The below answer is pretty smooth because of the use of the has table and it made this lookup problem so much easier.
const v={"97":"a","101":"e","105":"i","111":"o","117":"u"}
const isVow=a=>a.map(x=>v[x]||x)
// Similar to the top one, but a little more expanded and more clear to read as well.
function isVow(a){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return a.map(code => vowels.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code )
    }