// -------------------------------Dates-------------------------------------//

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

let myCreateDate = new Date(2024, 8, 30); // in javascript months starts with zero
console.log(myCreateDate);
console.log(myCreateDate.toString());

let myCreateTime = new Date(2024, 8, 30, 5, 30);
console.log(myCreateTime.toString()); // date is given in the form of year month day hour minutes and seconds
