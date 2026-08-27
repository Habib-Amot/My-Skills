// Typescript focuses on making objects to have a clear and well defined shape which guides the type of data that will inserted and the property
// that will be allowed

let userDetails = {
    name: "Amot",
    username: "Amot the dev",
    contact: "amotthedev@gmail.com",
    age: 30
}  // the compiler will infer that the name, username and contact property is a string and age is a number and it gets strict with it


// trying to access or provide properties that are not defined will cause an error
// userDetails.firstname = "error"

// objects shape can be defined explicitly 
let transactions: {transactionId: string, sentFrom: string, sentTo: string, amount: number}[] = [
    {transactionId: "12345taffcx", sentFrom:"20/3425s", sentTo:"sdfgrset3", amount:4030
}]

// OPTIONAL PROPERTY TYPES
// some properties in an object can be marked as optional so that the compiler dont complain when it is not passed
let product: {name: string, price?: number, waterProof?: boolean}  // price and waterproof key are not mandatory here

// a particular type shape can be aliased using type alias. Type alias is declared using the type keyword
type Product = {
    name: string,
    price: number, 
    waterProof?:boolean,
    getDiscount?(): number
}


// optional propery is omitted accessing it produces undefined
let hat: Product = {name:"Cowboy Hat", price: 200, getDiscount: function(){return this.price * 1.2}} 
// trying to access a method that is declared to be optional will cause the compiler to complain and thus not to be allowed
// hat.getDiscount()  // this is not allowed getDiscount() is optional

// to make the getDiscount to be accessible, type guard needs to be used
if(hat.getDiscount){
    console.log(`${hat.name} price is ${hat.price} but with a discount price of ${hat.getDiscount()}`)
}

// WHAT IF MULTIPLE PARAMETERS ARE PASSED TO THE PRODUCT TYPE THAT IS NOT INCLUDED IN THE TYPE
// say
// this will cause an error because mirrored is not defined and because the type has type annotation
/* let sunglasses: Product = {
    name:"Sun shade palaque", price:320, mirrored:true  // Object literal may only specify known properties, and 'mirrored' does not exist in type 'Product
} */

// To work around this problem, the suppressExcessPropertyErrors options can be used in tsconfig or make the types not to be annotated


// TYPE UNION IN TYPESCSRIPT
// types can be combined using union or bar symbol, where the resulting type are the properties that is common to bo type

type Person = {
    id: number,
    name: string,
    city: string
}

type Item = {
    id: number,
    name: string,
    price: number
}

let glove: Item = {id: 102, name:"glove", price:32}

let firstManOnMoon: Person = {id:123, name:"Neil Armstrong", city:"Unkown"}

let dataCollection: (Person | Item)[] = [  // here each item in the Array is of type person | item
    glove, firstManOnMoon
]
dataCollection.forEach((item: Person | Item)=> {
    console.log(`[${item.id}] => ${item.name}`)  // only name and id can be accessed since those are common properties between both type
})

// to make of the types in the union to be accessible, a type guard can be used
// the way that type guard works in the case of objects is quite different because the typeof keyword cannot be used instead, in keyword is used
// to check if an object that belongs to a union has the property being checked in the item and not in the other item. when this is found, that 
// item is of the type and all full property defined in the type can be accessed 
// But if the property exist in both type, the item is resolved to be a union of the type and the property that is allowed are those common to 
// both type
dataCollection.forEach((item: Person | Item) => {
    if('price' in item){
        console.log(`[${item.id}] => ${item.name} costs: $${item.price}`)
    }else if('city' in item){
        console.log(`[${item.id}] => ${item.name} lives in ${item.city}`)
    }
})

// TYPE INTERSECTION IN TYPESCRIPT
// intersection is the opposite of union. In intersection, the intersected result type is a combination of both types being intersected
// the new type contains property of both types

type Employee = {
    company: string,
    department: string, 
    position: string,
    salary?: number
}

let Hammot: Person & Employee = {
    id: 1,
    name: "Hammot",
    city: "Cairo",
    company: "AMazon",
    department: "computer science",
    position: "lead dev",
    salary: 234210000
}

let bob: EmployedPerson = {
    id:2102,
    name: "bob",
    city: "Nigeria",
    company: "Google",
    "department": "sales",
    "position":"senior sales lead"
}
type EmployedPerson = Person & Employee
// the object can now be used with property from both type
let Employees: EmployedPerson[] = [Hammot, bob]

console.log(`\n${"=".repeat(70)}`)
console.log(`${"Employee data".toUpperCase().padStart(35, " ")}`)
console.log(`${"=".repeat(70)}\n`)
Employees.forEach((item: EmployedPerson) => {
    console.log(`[${item.id}] => ${item.name} - ${item.company} - ${item.department} - ${item.position} <==> $${item.salary || 'unkown'}`)
})
