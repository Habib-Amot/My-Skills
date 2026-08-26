"use strict";
// This lesson is about understanding how function handles types and also function signature
// first it is important that Typescript does not allow for function overloading for example
function formatNumber(num) {
    let number = num.toString();
    return `$${num}`;
}
// and now redefining the function again will create an error during compilation
// function formatNumber(num: number, num2: number){
//     return `$${num} $${num2}`
// } 
// function parameter are strict in Typescript and usually has to be same as they were defined
function calculateTax(amount, discount) {
    return (amount * 1.2) - discount;
}
console.log("called with 2 args", calculateTax(100, 0.2));
function getUserContact(user, format) {
    return user.contact ? format ? `your contact detail: ${user.contact}` : user.contact : "No Contact Available";
}
let user = { name: "Amot", age: 34, contact: "amotthedev@gmail.com" };
console.log(getUserContact(user, true));
// Using Default Parameters
function getUserYearOfBirth(user, includeName = false) {
    let yearOfBirth = new Date().getFullYear() - user.age;
    return includeName ? `Hi ${user.name}, you're born on ${yearOfBirth}` : yearOfBirth;
}
console.log(getUserYearOfBirth(user, true));
// USING VOID FUNCTIONS
// void functions are functions that do not return any type instead they cause a side effect and return void instead
function showUserDetails(user) {
    console.log(`\nuser name: ${user.name}\nuser age: ${user.age}\nuser contact details:${user.contact}`);
}
showUserDetails(user);
