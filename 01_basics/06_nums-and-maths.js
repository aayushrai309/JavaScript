const score = 400
console.log(score);

const balance = new Number(100); // this helps us to define a variable fully dedicated to a number
console.log(balance);

console.log(balance.toString()); // helps to convert number to string
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //hepls us in uing precision values after decimal


const otherNumber = 23.8547;
console.log(otherNumber.toPrecision(3));


const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // cooma (,) lage hue hote hai default US Standards ke hisab se hote hai but "en-In" iska use kar ke indian standard ke hisab se kar sakte hai



// ------------------------------------MATHS-----------------------------------------------------//

console.log(Math);
console.log(Math.abs(-4)); // abs helps us to convert negative values into positive but positive remains the same 
console.log(Math.round(4.6)); // round off the number to the nearest integer
console.log(Math.ceil(4.2)); // ceil will round off the integer to the highest value eg 4.2 will become 5
console.log(Math.floor(4.9)); // floor will round off the intger to the lowest value eg 4.2 or 4.9 will become 4
console.log(Math.min(4, 3, 2, 5));
console.log(Math.min(4, 3, 2, 5));




