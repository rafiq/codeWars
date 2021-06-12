function splitTheBill(x) {
    let amountsArray = Object.entries(x);
    let cost = amountsArray.reduce((a,b) => a + b[1],0) / amountsArray.length;

    for (let i = 0; i < amountsArray.length; i++) {
        let array = amountsArray[i];
        x[array[0]] = +(x[array[0]] - cost).toFixed(2)
    }
    return x
}
console.log(
    splitTheBill({A: 20, B: 15, C: 10}),// {A: 5, B: 0, C: -5});
    splitTheBill({A: 40, B: 25, X: 10}),// {A: 15, B: 0, X: -15});
    splitTheBill({ A: -55.33333333333333,
        B: -70.33333333333333,
        C: -85.33333333333333,
        D: 57.66666666666667,
        E: -37.33333333333333 }),//{ A: -17.2, B: -32.2, C: -47.2, D: 95.8, E: 0.8 };
)