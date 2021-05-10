function DNAStrand(dna){


    return dna.split("").reduce((acc,curr) => {
        switch (curr) {
            case "A":
                acc += "T"
                break;
            case "T":
                acc += "A"
                break;
            case "C":
                acc += "G"
                break;

            default:
                acc += "C"
                break;
        }
        return acc;
    },"")

  }
  console.log(
    DNAStrand("AAAA"),//"TTTT",//"String AAAA is");
DNAStrand("ATTGC"),//"TAACG",//"String ATTGC is");
DNAStrand("GTAT"),//"CATA",//"String GTAT is");
  )