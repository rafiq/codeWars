function countSalutes(hallway) {
    let saluteCount = 0;
    potentialSaluteCount = 0;
    for (let i = 0; i < hallway.length; i++) {
        if (hallway[i] === ">") potentialSaluteCount++;
        if (potentialSaluteCount !== 0 && hallway[i] === "<") {
            saluteCount += potentialSaluteCount * 2;
            // potentialSaluteCount = 0;
        }
    }
    return saluteCount;
}
console.log(
    countSalutes('<---->---<---<-->'),//4);
    countSalutes('------'),//0);
    countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->'),//42);
    countSalutes('<<----<>---<'),//2);
    countSalutes('>'),//0);
)