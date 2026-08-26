//  Arrays in Typescript can contain any combination of types and have variable length
// they are denoted by the data type they contain followed by a square brackets []

let prices: number[] = [200, 230, 350, 453, 500]
let itemNames: string[] = ["Shoes", "Bag", "Jeans", "Laptop", "Monitor"]

function writePrice(price: number): string{
    return `$${price}`
}

prices.forEach((price, index)=>{
    console.log(`${writePrice(price)} for ${itemNames[index]}`)
})

// Arrays type is inferred when the type is not explicitly provided and this can sometimes lead to some issues especially during processing 
let goodsPrices = [20, 450, 910, "40"]   // this will make the goodsPrices variable to contain type of (string | number)[]

// processing the array like a number[] will cause an error
// goodsPrices.forEach((item, index)=>{
//     console.log(`${writePrice(item)} for ${itemNames[index]}`)  // this will cause an error to be reported
// })

// when an array is created without ant type being assigned to it and also with an empty array, the type any is assigned to the variable
// for example
let studentIncome = []  // here studentIncome will be of type any[] and type never if strictNullChecks is on making the variable unusable

// TUPLES
// tuples type in a simple term is just an array that contain another array and has a fixed lenght
let airplaneSetMapping: [string, number][] = [['c78-10', 20], ["c79", 30]]
console.log("\n")
airplaneSetMapping.forEach((item: [string, number])=> console.log(`Cabin ${item[0]} seat ${item[1]}\n${'-'.repeat(30)}`))

// ENUM TYPES
// enums in ts are way to create values with predefined value which helps to improve code readability and consiceness
enum UserFavoriteContent {
    Sales, Skits, Comedy, Preaching, Motivation
}

// enum types in Typescript are converted to objects where each item in the item become a key, value pair and vice versa
// when not passed a value, each key is assigned a number which usually start from zero and subsequently incremented by 1 from the previous key
console.log( UserFavoriteContent.Sales)

let myFavoriteContent: UserFavoriteContent = UserFavoriteContent.Sales
// when a variable is declared to be an enum type, the values that can be assigned to that variable will the values of the enum types alone in 
//  the forward direction and not the backward direction
// myFavoriteContent = "Blues";   Error Type '"Blues"' is not assignable to type 'UserFavoriteContent'

// to show that values of enum are gotten based on the increment of the previous key value. Here is an exmaple
enum Product {
    Glove, Socks = 10, Boots, Hat=20, Robe
}

console.log(Product.Glove, Product.Socks, Product.Boots, Product.Hat, Product.Robe) // outputs 0 10 11 20 21

// also values for enums can be a string instead of the default number that is being used by the compiler
enum InternetErrors {
    NetConnectionError = "No internet connection please try again later",
    NetUnkownHost = "Unknown remote or local host",
    DNSProbeError = "Not able to resolve host dsn"
}

// and now the values of the enum can be consumed
console.log(InternetErrors.NetConnectionError)

// enums allows for values to be used as a lookup for keys and keys can be used to lookup values this makes enums a two way process
// but when they are declared as a const, they can only be accessed via their real key and not the ones created by the compiler
const enum ErrorCodes {
    NotFound = 404,
    PermissionDenied = 403,
    UnAuthorized = 401,
    StatusOK = 200,
}

// this will cause an erro
// let responseStatus = ErrorCodes[401]  // error TS2476: A const enum member can only be accessed using a string literal.
// but this is valid
let userResponseCode: number = ErrorCodes.StatusOK;


// USING LITERAL VALUE TYPES 
// typescript allows for literal types to be specified as the result of a function or the set of values in which a variable can be from
let allowedAge: 15 | 25 | 30 = 25  // prevents any other value to be assigned to this variable

// the same thing can be achieved in functions
function calculateTaxt(amount: number, discount: number): 200 | 500 | 350{
    return (amount * 1.2) - discount as 200 | 500 | 350   // return type must be same as the annotated return type
}
