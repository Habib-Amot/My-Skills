// This lesson is about understanding how function handles types and also function signature

// first it is important that Typescript does not allow for function overloading for example

function formatNumber(num: number){
    let number = num.toString() as string;
    return `$${num}`

}

// and now redefining the function again will create an error during compilation
// function formatNumber(num: number, num2: number){
//     return `$${num} $${num2}`
// } 


// function parameter are strict in Typescript and usually has to be same as they were defined
function calculateTax(amount: number, discount: number){
    return (amount *1.2) - discount
}

console.log("called with 2 args", calculateTax(100, 0.2))
// console.log("called with 3 args", calculateTax(100, 0.2, 3))  // (23,58): error TS2554: Expected 2 arguments, but got 3.
// console.log("called with 1 args", calculateTax(100))  // src/index.ts(23,58): error TS2554: Expected 2 arguments, but got 3.


// Using Optional Parameters

// optional parameters are a way of telling Typescript that the parameter can be ignored and passed inside the function as undefined
type User = {
    name: string,
    age: number,
    contact: null | string
}

function getUserContact(user: User, format?: boolean): string{  // format here is an optional arg and will be ignored if not passed 
    return user.contact ? format ? `your contact detail: ${user.contact}` : user.contact : "No Contact Available"
}


let user = {name: "Amot", age: 34, contact: "amotthedev@gmail.com"}

console.log(getUserContact(user, true))


// Using Default Parameters
function getUserYearOfBirth(user: User, includeName: boolean=false): number | string{
    let yearOfBirth = new Date().getFullYear() - user.age
    return includeName ? `Hi ${user.name}, you're born on ${yearOfBirth}` : yearOfBirth
}

console.log(getUserYearOfBirth(user, true))

// USING VOID FUNCTIONS
// void functions are functions that do not return any type instead they cause a side effect and return void instead
function showUserDetails(user: User): void{
    console.log(`\nuser name: ${user.name}\nuser age: ${user.age}\nuser contact details:${user.contact}`)
}

showUserDetails(user)
