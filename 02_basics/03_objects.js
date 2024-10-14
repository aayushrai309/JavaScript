// singleton object = jab bhi koi object constructor ki help se banega tab wo singleton object banega (Object.create)

// object literals

const mySym = Symbol("key1"); // first you have to define a symbol out side the object then you can access the symbol 

const user = {
    name : "Aayush",
    "fullname": "Aayush Rai",
    [mySym]: "mykey1", // correct syntax to define an symbol in object
    age: 24,
    email: "aayush@google.com",
    pass: "Aayu123",
    isLogged: false,
};

console.log("org object = ", user);
console.log(user.isLogged);  // most of time objects ki values ko access karne ke liye hum (.value) ka hi use karenge.
console.log(user["fullname"]); // special case to access some keys from objects.
console.log(user[mySym]); // special case to access the values of an objects.

user.fullname = "Aayush Sanjay Rai"; // correct way to over write the value of objects
user.email = "aayush@gmail.com";
console.log(user);

// Object.freeze(user); // freez method is used to freez the object for doing the changes


// function to access key from objects
user.greeting = function () {
    console.log("Hello Everyone");
}
console.log(user.greeting());

user.greetingTwo = function () {
    console.log(`Hello ${this.name}`); // this keyword is used to access properties from element
}
console.log(user.greetingTwo());
