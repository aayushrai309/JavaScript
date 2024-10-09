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

             
const myArr2 = new Array(1, 2, 3, 4); // other way to write an array
console.log(myArr2);
