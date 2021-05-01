// The below is a GOOD job of using recursive and simplifiying the problem. This is checking the next number to see if it is a doubleton and if it is then return it. If it is not then add one and see if that is a doubleton.

const isDoubleton = n => new Set(String(n)).size === 2 ;
const doubleton = n => isDoubleton(n+1) ? n+1 : doubleton(n+1) ;