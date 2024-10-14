//function =  a function is a block of code that performs a specific task or returns a value. 
//            Functions are used to group code snippets together and reuse them throughout a program. 
//            They can also be used to produce different results by using the same code with different arguments


function sayMyName() {
    console.log("Aayush Rai");
}

// sayMyName => this is the reference of the function

sayMyName(); // this is the execuation of the function
sayMyName(); // in short function means defining once and executing multiple times




//---------------------------Function to add two numbers----------------------------------//

function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result; // Note - Return ke baad koi bhi value print nhi hogi. because it has returned the value of result.
}

const result = addTwoNumbers(3, 4);
console.log(result);



//-------------------------Function to diaplay Message-----------------------------------//

function loginUserMessage(username = "Sam") { // Note = Jab bhi koi value pass nahi ki jayegi tab function automatically value as "Sam" le lega.
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage("Aayush Rai"));
console.log(loginUserMessage()); // Note = Jab bhi aap fuunction me koi value nhi define karte hai tab output me undefined aata hai


