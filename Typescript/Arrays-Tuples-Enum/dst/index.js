"use strict";
//  Arrays in Typescript can contain any combination of types and have variable length
// they are denoted by the data type they contain followed by a square brackets []
let prices = [200, 230, 350, 453, 500];
let itemNames = ["Shoes", "Bag", "Jeans", "Laptop", "Monitor"];
function writePrice(price) {
    return `$${price}`;
}
prices.forEach((price, index) => {
    console.log(`${writePrice(price)} for ${itemNames[index]}`);
});
// Arrays type is inferred when the type is not explicitly provided and this can sometimes lead to some issues especially during processing 
let goodsPrices = [20, 450, 910, "40"]; // this will make the goodsPrices variable to contain type of (string | number)[]
// processing the array like a number[] will cause an error
// goodsPrices.forEach((item, index)=>{
//     console.log(`${writePrice(item)} for ${itemNames[index]}`)  // this will cause an error to be reported
// })
// when an array is created without ant type being assigned to it and also with an empty array, the type any is assigned to the variable
// for example
let studentIncome = []; // here studentIncome will be of type any[] and type never if strictNullChecks is on making the variable unusable
// TUPLES
// tuples type in a simple term is just an array that contain another array and has a fixed lenght
let airplaneSetMapping = [['c78-10', 20], ["c79", 30]];
console.log("\n");
airplaneSetMapping.forEach((item) => console.log(`Cabin ${item[0]} seat ${item[1]}\n${'-'.repeat(30)}`));
// ENUM TYPES
// enums in ts are way to create values with predefined value which helps to improve code readability and consiceness
var UserFavoriteContent;
(function (UserFavoriteContent) {
    UserFavoriteContent[UserFavoriteContent["Sales"] = 0] = "Sales";
    UserFavoriteContent[UserFavoriteContent["Skits"] = 1] = "Skits";
    UserFavoriteContent[UserFavoriteContent["Comedy"] = 2] = "Comedy";
    UserFavoriteContent[UserFavoriteContent["Preaching"] = 3] = "Preaching";
    UserFavoriteContent[UserFavoriteContent["Motivation"] = 4] = "Motivation";
})(UserFavoriteContent || (UserFavoriteContent = {}));
// enum types in Typescript are converted to objects where each item in the item become a key, value pair and vice versa
// when not passed a value, each key is assigned a number which usually start from zero and subsequently incremented by 1 from the previous key
console.log(UserFavoriteContent.Sales);
let myFavoriteContent = UserFavoriteContent.Sales;
// when a variable is declared to be an enum type, the values that can be assigned to that variable will the values of the enum types alone in 
//  the forward direction and not the backward direction
// myFavoriteContent = "Blues";   Error Type '"Blues"' is not assignable to type 'UserFavoriteContent'
// to show that values of enum are gotten based on the increment of the previous key value. Here is an exmaple
var Product;
(function (Product) {
    Product[Product["Glove"] = 0] = "Glove";
    Product[Product["Socks"] = 10] = "Socks";
    Product[Product["Boots"] = 11] = "Boots";
    Product[Product["Hat"] = 20] = "Hat";
    Product[Product["Robe"] = 21] = "Robe";
})(Product || (Product = {}));
console.log(Product.Glove, Product.Socks, Product.Boots, Product.Hat, Product.Robe); // outputs 0 10 11 20 21
// also values for enums can be a string instead of the default number that is being used by the compiler
var InternetErrors;
(function (InternetErrors) {
    InternetErrors["NetConnectionError"] = "No internet connection please try again later";
    InternetErrors["NetUnkownHost"] = "Unknown remote or local host";
    InternetErrors["DNSProbeError"] = "Not able to resolve host dsn";
})(InternetErrors || (InternetErrors = {}));
// and now the values of the enum can be consumed
console.log(InternetErrors.NetConnectionError);
// this will cause an erro
// let responseStatus = ErrorCodes[401]  // error TS2476: A const enum member can only be accessed using a string literal.
// but this is valid
let userResponseCode = 200 /* ErrorCodes.StatusOK */;
// USING LITERAL VALUE TYPES 
// typescript allows for literal types to be specified as the result of a function or the set of values in which a variable can be from
let allowedAge = 25; // prevents any other value to be assigned to this variable
// the same thing can be achieved in functions
function calculateTaxt(amount, discount) {
    return (amount * 1.2) - discount; // return type must be same as the annotated return type
}
