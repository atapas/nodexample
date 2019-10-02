const calc = require('./calcModule');

const { sum, sub, mul } = require('./calcModule');

// const add = calc.sum(2, 3);
// const subs = calc.sub(8, 5);
// const multi = calc.mul(9, 3);

const add = sum(2, 3);
const subs = sub(8, 5);
const multi = mul(9, 3);

console.log(add, subs, multi);