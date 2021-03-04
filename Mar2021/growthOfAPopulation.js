function nbYear(p0, percent, aug, p) {
    let years = 0;

    while (true) {
        if (p0 >= p) return years;

        p0 = p0 * (1 + percent / 100) + aug;
        years++;
    }

    // return years;
}
console.log(
    nbYear(1000,1000,0.02,50) ,//=> 1070
    nbYear(1500, 5, 100, 5000),// -> 15
    nbYear(1500000, 2.5, 10000, 2000000),// -> 10
    nbYear(1500000, 0.25, 1000, 2000000),// -> 94
)