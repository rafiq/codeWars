function isTriangle(a,b,c)
{
    let side1 = Object.values(arguments)[0];
    let side2 = Object.values(arguments)[1];
    let side3 = Object.values(arguments)[2];

    if  (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) return true;
    else return false;

//    if Object.values(arguments)[0] //.every(element => element > 0 && );
}

console.log(
    isTriangle(1,2,2),// true);
    isTriangle(7,2,2),// false);
)