function isIsogram(str){
    return Object.values(str.toLowerCase().split("").reduce((acc,curr) => {
        acc[curr] ? acc[curr]++ : acc[curr] = 1;
        return acc;
    },{})).every(num => num === 1);
  }

console.log(
    isIsogram("Dermatoglyphics"),//true );
    isIsogram("isogram"),//true );
    isIsogram("aba"),//false,//"same chars may not be adjacent" );
    isIsogram("moOse"),//false,//"same chars may not be same case" );
    isIsogram("isIsogram"),//false );
    isIsogram(""),//true,//"an empty string is a valid isogram" );
)