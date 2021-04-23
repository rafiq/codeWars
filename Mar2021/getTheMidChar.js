function getMiddle(s)
{


    if (s.length % 2 === 1) return s.substr(Math.floor((s.length / 2)),1)
    else return s.substr(Math.floor((s.length / 2) - 1),2);


}
console.log(
    getMiddle("test"),//"es");
    getMiddle("testing"),//"t");
    getMiddle("middle"),//"dd");
    getMiddle("A"),//"A");
)