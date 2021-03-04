const perfectRoots = (n) => [1/2, 1/4, 1/8].map(el=> Math.pow(n, el) % 1 === 0 ).every(e => e === true)

const perfectRoots = n => [2,4,8].every(r => Math.pow(n, 1/r) % 1 == 0)

const perfectRoots = n => Math.pow(n, 1/8) % 1 === 0