// static typing is the counterpart of dynamic typing where variables are inffered from their value. But in static typing, variable types
// are stricly typed
// this variable is declared to hold string alone
let myName = "Amot the Dev";
console.log("my name is ", myName);
// and now the variable cannot hold any type of data value
// myName = 34  // this will cause a compile error
// declaring function is quite similar
function writeTask(taskName) {
    console.log('you are given task', taskName);
}
function calculateTax(amount) {
    return amount * 1.2;
}
// type inference
let myDiscount = calculateTax(100); // myDiscount here will be of type number
// making use of any type
function stripText(word) {
    return word.trim(); // if word should be a number, this will throw an error during runtime because the compiler will ignore it due to any
}
// stripText(455) // will cause an error
// by making of type union, it is possible to chain multiple types together and have the compiler to deal with the methods that will be allowed
// for the data type
function calculateTax_f(amount, format) {
    return format ? `Tax: ${amount * 1.2}` : amount;
}
let taxValue = calculateTax_f(200, true); // this variable belongs to type number and string
// and now fewer operatiosn are allowed to be carried out on the variable
// taxValue.toFixed(2)  // this is error because the value returned by calcaulateTax_f is both number and string 
// to bypass the above error on line 44, a type assertion can be used
let newTaxValue = calculateTax_f(299, true);
// nexTaxValue can now be safely treated like string now
console.log(newTaxValue.toUpperCase());
// another thing is that the asserted to type must be among the values that are returned by the function
// let finalTaxValue = calculateTax_f(500, false) as boolean;  // this will cause an error because boolean is not expected as return value
// MAKING USE OF TYPE GUARD
// type guard is a way that Typescript infers the type of variable by looking at the data type comparison that is used in conditional statements
function findHighestNumber(format = false, ...nums) {
    let highestNumber = Math.max(...nums);
    return format ? `Higest number is ${highestNumber}` : highestNumber;
}
let highestNumber = findHighestNumber(false, 1, 2, 6);
switch (typeof highestNumber) {
    case 'number':
        // here highest number will be treated like a number
        console.log(highestNumber.toFixed(2));
        break;
    case 'string':
        console.log(highestNumber.toUpperCase()); // it is treated like a string here
        break;
    default:
        let value = highestNumber;
}
// HANDLING NULL AND UNDEFINED TYPES
// in Typescript, undefined and null types are valid data types for all classes and thus can be assigned to any type without error. e.g
function calculateCartItems(items, format = false) {
    if (items.length == 0) {
        // return null  // here there wont be error because null types is a valid type of any data type
        return 0;
    }
    else {
        let sum = items.reduce((prev, newItem) => prev + newItem);
        return format ? `Items in Cart is ${sum}` : sum;
    }
}
taxValue = calculateCartItems([]);
console.log(taxValue - 10);
function getUserContactDetails(user) {
    return user.contactDetails;
}
let userContact = getUserContactDetails({
    name: "Amot the devs",
    username: "amot",
    contactDetails: null
}); // exclamation mark here means that the value that will be returned from this function will not be null and can be trusted
console.log(userContact); // still ouptuts null because that compiler has been assured that this will not contain null
