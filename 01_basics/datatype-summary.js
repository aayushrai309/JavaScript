// primmitive datatypes => 7types : String, Number, Boolean, Null, Undefined, Symbol, BigInt
// Reference Type or Non Primitive Datatype => Arrays, Objects, Functions
// Javascript is a dynamacally typed language



// primitive datatypes
const score = 100; //integer = consist of number
const scoreValue = 100.36;
const name = "Aayush Rai"; // string = coonsist of characters and written inside double quotes

console.log(score);
console.log(name);


const isLoggedin = false; //boolean = true or false value ie 0 or 1
const outsideTemp = null; //null = consist to no value and null is a typeof object
let userEmail; //undefined = variable which doesnot consist of values

console.log(isLoggedin);
console.log(outsideTemp);


const id = Symbol('div'); //symbol = mainly used in frontend development 
const anotherId = Symbol('div')

const bigNumber = 3459868546848645468968n; //bigint = contains big numbers


// Reference Type (Non Primitive datatypes)
const heros = ["shaktiman", "ironman", "batman"]; // array 
console.log(heros);

// object
let myObj = {
    name : "Aayush",
    age : 25,
}; 
console.log(myObj);

//function
const myFunction = function(){
    console.log("Aayush Rai");
}
myFunction();



