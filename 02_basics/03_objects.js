// singleton object = jab bhi koi object constructor ki help se banega tab wo singleton object banega (Object.create)

// object literals
const user = {
    name : "Aayush",
    "fullname": "Aayush Rai",
    age: 24,
    email: "aayush@google.com",
    pass: "Aayu123",
    isLogged: false,
};

console.log(user);
console.log(user.isLogged); //not a good way to acces objects as for "fullname"
console.log(user["fullname"]);
