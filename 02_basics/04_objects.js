// how to declare objects using constructor (singleton objects)

// const tinderUser = new Object(); // this is a singleton object.

const tinderUser = {}; // this is a non singleton object.
tinderUser.id = "123abc";
tinderUser.name = "Aayush Rai";
tinderUser.isLogged = false;

// console.log(tinderUser);


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
const obj3 = Object.assign({}, obj1, obj2); // {} = parenthesis works as a optional parameter/target and the rest will act as source. and if you don't give {} then all the values are stored in obj1.
console.log("object assign = ",obj3);

// other way to mearge two or more objects by using spread operator(...)
const obj4 = {...obj1, ...obj2};
console.log("spread opr = ", obj4);

const users = [
    {
        id: 1,
        email: "aayush@google.com",
    },
    {
        id: 2,
        email: "avishek@google.com",
    },
    {
        id: 3,
        email: "smrity@google.com",
    },
]

console.log(users[0].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // it will helps to get the the key of an object and it will store it in an array which makes it easy to iterate a loop on it
console.log(Object.values(tinderUser)); // it will helps to get the the values of an object and it will store it in an array which makes it easy to iterate a loop on it
console.log(Object.entries(tinderUser)); // it will make each key value pair of an object into an array
console.log(tinderUser.hasOwnProperty("isLogged")); // it helps us to aske some question to the object wheather it has the following property or not and it will return answer in boolean values




//-------------------------------------Object Destructing-----------------------------------------//
const course = {
    courseName: "JavaScript",
    price: "999",
    courseTeacher: "Aayush",
}

// console.log(course.courseTeacher);

const {courseTeacher: teacher} = course; // example of destructing the objects, you can give any name of your own 
console.log(teacher);




