// how to declare objects using constructor (singleton objects)

// const tinderUser = new Object(); // this is a singleton object.

const tinderUser = {}; // this is a non singleton object.
tinderUser.id = "123abc";
tinderUser.name = "Aayush Rai";
tinderUser.isLogged = false;

console.log(tinderUser);


const regularUser = { 
    email: "aayush@google.com",
    fullName : { 
        userfullname: { // we can define object inside an object.
            firstName: "Aayush",
            lastName: "Rai",
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullName); // we can access the value of object inside an Object by using dot(.) and element name.
console.log(regularUser.fullName.userfullname.firstName);
console.log(regularUser.fullName.userfullname.lastName); // we can access the value of object inside an Object by using dot(.) and element name.
console.log(regularUser);


//------------------------------mearging two objects-----------------------------------//
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// const obj3 = {obj1, obj2}; // syntax will show an problem it will mearge both the array along with the variable name.
// const obj3 = Object.assign(obj1, obj2); // it will mearge both the Objects.

//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const obj3 = Object.assign({}, obj1, obj2); // {} = parenthesis works as a optional parameter and it will definately mearge bot the objects and gives us the desired result. 
console.log(obj3);




