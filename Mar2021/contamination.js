function contamination(text, char){

    if (!text || !char) return "";
    return text.split("").reduce((acc,curr,idx) => {
        acc += char;
        return acc;
    },"");

  }
console.log(
    contamination("abc","z"),// "zzz")
    contamination("","z"), //"")
    contamination("abc",""),// "")
    contamination("_3ebzgh4","&"),// "&&&&&&&&")
    contamination("//case"," "), //"      ")
)