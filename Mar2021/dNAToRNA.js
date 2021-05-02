function DNAtoRNA(dna) {
    return dna.split("").reduce((acc,curr) => {
        if (curr === "T") acc += "U";
        else acc += curr;

        return acc;
    },[])
  }
console.log(
    DNAtoRNA("TTTT"), //"UUUU")
    DNAtoRNA("GCAT"),// "GCAU")
    DNAtoRNA("GACCGCCGCC"), //"GACCGCCGCC")
)