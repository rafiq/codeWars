function checkNucleotides(sequence) {
    let mapping = {
        A:1,G:2,C:3,U:4
    }
    let isNotValid = sequence.split("").find(letter => !(mapping[letter]));

    if (!isNotValid) return `Valid Sequence: ${sequence}`;
    else return `There is an invalid letter: ${isNotValid}. At position: ${sequence.indexOf(isNotValid) + 1}`
}
console.log(
    checkNucleotides("AUAUA"), //"Valid Sequence: AUAUA", checkNucleotides("AUAUA"))
    checkNucleotides("UUUUU"), //"Valid Sequence: UUUUU", checkNucleotides("UUUUU"))
    checkNucleotides("GAUAB"),// "There is an invalid letter: B. At position: 5", checkNucleotides("GAUAB"))
)