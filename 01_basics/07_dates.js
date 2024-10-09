// -------------------------------Dates-------------------------------------//

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());


let myCreatedDate = new Date("01-14-2024");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor((Date.now() / 1000))); // convert time into seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());

console.log(`${newDate.getDate()} and the time is ${newDate.getHours()}`)

