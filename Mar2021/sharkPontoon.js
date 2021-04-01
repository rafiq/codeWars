function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){

    let humanTravelTime = pontoonDistance / youSpeed
    let sharkTravelTime = sharkDistance / sharkSpeed;
    if (dolphin) sharkTravelTime = sharkDistance / (sharkSpeed / 2)
        return humanTravelTime < sharkTravelTime ? "Alive!" : "Shark Bait!";
}
console.log(
    shark(12, 50, 4, 8, true),//"Alive!");
    shark(7, 55, 4, 16, true),//"Alive!");
    shark(24, 0, 4, 8, true),//"Shark Bait!");
)