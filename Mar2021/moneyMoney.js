function calculateYears(principal, interest, tax, desired) {
    let yearCount = 0;
    let sum = 0;

    while (principal < desired) {
        sum = principal + (getInterest(principal,interest) - getTaxesDue(getInterest(principal,interest),tax))
        principal = sum;
        yearCount++
    }
    return yearCount;
}
function getInterest(principal,interestRate) {
    return principal * interestRate;
}
function getTaxesDue(accruedInterest,taxRate) {
    return accruedInterest * taxRate;
}
console.log(
    calculateYears(1000, 0.05, 0.18, 1100),// 3)
    calculateYears(1000,0.01625,0.18,1200),// 14)
    calculateYears(1000,0.05,0.18,1000),// 0)
)