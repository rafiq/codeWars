const DRINKS = {
    jabroni:"Patron Tequila",
"school counselor":	"Anything with Alcohol",
programmer:	"Hipster Craft Beer",
"bike gang member":	"Moonshine",
politician:	"Your tax dollars",
rapper:	"Cristal",
}

function getDrinkByProfession(param){
    if (Object.keys(DRINKS).some(el => el.toLowerCase() === param.toLowerCase())) return DRINKS[param.toLowerCase()];
    else return "Beer";
}
console.log(
    getDrinkByProfession("jabrOni"),// "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
    getDrinkByProfession("scHOOl counselor"), //"Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
    getDrinkByProfession("prOgramMer"), //"Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
    getDrinkByProfession("bike ganG member"), //"Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
    getDrinkByProfession("poLiTiCian"), //"Your tax dollars", "'Politician' should map to 'Your tax dollars'");
    getDrinkByProfession("rapper"), //"Cristal", "'Rapper' should map to 'Cristal'");
    getDrinkByProfession("pundit"),// "Beer", "'Pundit' should map to 'Beer'");
    getDrinkByProfession("Pug"),// "Beer", "'Pug' should map to 'Beer'");
)