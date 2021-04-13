function pointsPer48(ppg, mpg) {
    // const MIN_PER_GAME = 48;
    // if (ppg === 0) return 0;
    // return Number((ppg / ( mpg / MIN_PER_GAME )).toFixed(1));

    let pts = Number( ((48/mpg)* ppg).toFixed(1))

return (isNaN(pts)) ? 0: pts

}
console.log(
    pointsPer48(12, 20),// 28.8)
    pointsPer48(10, 10), //48.0)
    pointsPer48(5, 17),// 14.1)
    pointsPer48(0, 0),// 0)
    pointsPer48(30.8, 34.7),// 42.6)  // Russell Westbrook 1/15/17
    pointsPer48(22.9, 33.8), //32.5)  // Kemba Walker 1/15/17
)