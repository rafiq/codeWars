function correct(string)
{
    // return string.split("")
	return string.split("").reduce((acc,curr,idx) => {
        if (curr === "0") acc += "O";
        else if (curr === "1") acc += "I";
        else if (curr === "5") acc += "S";
        else acc += curr;
        return acc;
    },"")
}

console.log(
    correct("L0ND0N"),//"LONDON"),//
    correct("DUBL1N"),//"DUBLIN"),//
    correct("51NGAP0RE"),//"SINGAPORE"),//
    correct("BUDAPE5T"),//"BUDAPEST"),//
    correct("PAR15"),//"PARIS"),//
)