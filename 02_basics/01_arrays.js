// arrays => arrays basically helps in storing a collection of multiple items under a single variable name. Javascript arrays are resizable and javascript arrays are 
//           not associative arrays so array elements cannot be accessed using string as indices.

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Ironman", "Thor", "Superman", "Batman"];

console.log(myArr);
console.log(myHeros[1]);

myArr.push(6); // push method is ued to add element into an array
console.log(myArr);
myHeros.push("Captian America")// push method is ued to add element into an array
console.log(myHeros);

myArr.pop(); // helps to remmove last element of the array we don not have to pass any parameter it directly removes the last value from an array
console.log(myArr);
myHeros.pop(); // helps to remmove last element of the array we don not have to pass any parameter it directly removes the last value from an array
console.log(myHeros);

myArr.unshift(9); // add the element to the start of the arrays
console.log(myArr);
myHeros.unshift("Spiderman"); // add the element to the start of the arrays
console.log(myHeros);

myArr.shift(); // removes the element from the start of the arrays
console.log(myArr);
myHeros.shift(); // removes the element from the start of the arrays
console.log(myHeros);

console.log(myArr.includes(9)); // include function is basically used to ask question from array and it will return answer in boolean (true or false)
console.log(myHeros.includes("Ironman"));

console.log(myArr.indexOf(45)); // indexoff function tells the position of the element inside the array
console.log(myHeros.indexOf('Superman'));

const newArr = myArr.join() // join method basically helps in binding the array and converting it into String seperarted by comma (,)
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

//--------------------------------Slice & Splice-------------------------------------//
console.log("A", myArr);
const myn1 =myArr.slice(1, 3); // slice = Creates a shallow copy of an array, without modifying the original array
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); // splice =  Changes the contents of the original array by adding, removing, or replacing elements. 
console.log("org Array ", myArr);
console.log(myn2);

