const name = "Aayush Rai";
const repoCount = 50;

console.log(name + " is " + repoCount);
console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aayush-hc');

// these are string methods/builders
console.log(gameName.length); //to find length of string
console.log(gameName.toUpperCase()); // to convert string to Upper Case
console.log(gameName.toLowerCase()); // to convert string to Lower Case
console.log(gameName.charAt(3)); // to find the which letter is at that position 
console.log(gameName.indexOf("s")); // to find the index of the passed value

const newString = gameName.substring(0, 4); //it hepls to create a substr from your str and cannot pass negative values
console.log(newString);

const anotherStr = gameName.slice(-8, 4); //you can pass negative values in slice
console.log(anotherStr);

const newStr = "       aayush       ";
console.log(newStr);
console.log(newStr.trim()); // trim basically removes unwanted whaitespaces from the string

const url = "https://aayush.com/aayush%20rai";
console.log(url.replace('%20', '')); // replace helps in replacing whatever you want from other string




