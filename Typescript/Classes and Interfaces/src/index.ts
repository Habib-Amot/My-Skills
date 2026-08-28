// classes in typescript are an elegant way of creating object blueprint and typescript come with rich feature tha allows working with classes 
// more easier, cleaner and safer

class User{
    private readonly _id: number  // access to user id is protected within the class alone and can only be read and not written to
    username: string  // public item
    accountBalance: number  // public item
    totalItemsInCart: number | undefined  // public item
    public readonly accountNumber: number  //account number is public and can be readonly and not written to

    constructor(id: number, username: string, accountBalance: number, accountNumber:number, totalItemsInCart?: number){
        this._id = id
        this.username = username
        this.accountBalance = accountBalance
        this.totalItemsInCart = totalItemsInCart
        this.accountNumber= accountNumber
    }

    get id(): number{
        return this._id
    }
}

let Bob = new User(121232, "Bobber", 10000, 8079091367, 3)
// console.log(Bob.id)  // id cannot be accessed as it is private and only accessible within class 'User'

// trying to change Bob's account number is not possible
// Bob.accountNumber = 5342626245  // Cannot assign to 'accountNumber' because it is a read-only property.

console.log(`[${Bob.id}]: ${Bob.username} => Balance: $${Bob.accountBalance}`)


// a more concise way of declaring function contructor
class Product{
    constructor(public name: string, private readonly id: number, public price: number){
        // no statement needed, object will define properties itself
    }


}

let glove: Product = new Product('Gloves', 323441, 400)
console.log(`${glove.name} costs ${glove.price}`)

// CLASS INHERITANCE
class Person{
    constructor(public id: string, public name: string, public city: string){
        // no statement
    }
}

class Employee extends Person{
    constructor(public id: string, public name: string, public city: string, public salary: number){
        super(id, name, city)  //initialize parent object
        this.salary = salary
    }
}

class Supplier extends Person{
    constructor(public id: string, public name: string, public city: string, public company: string){
        super(id, name, city)
        this.company = company
    }
}

class Customer extends Person{
    constructor(public id: string, name: string, city: string, public longTermValue: number){
        super(id, name, city)
        this.longTermValue = longTermValue
    }
}

// the union of these different classes result in a type that contains properties that is common to all the types which is the Person interface
// this means that only properties i.e methods and attributes that belongs to the Person class will be allowed on each data items or instances

let peopleCollection: (Employee | Supplier | Customer)[] = [
    new Supplier("102", "Brigget Rubber", "North Carolina", "Brigget Rubber & Co."),
    new Employee("001-2a", "Amot", "Lagos", 30000),
    new Customer("243-2as-100", "Bobby", "South Carolina", 20000)
]

peopleCollection.forEach((item: Person)=>{
    console.log(`\n[${item.id}] ${item.name} ${item.city}`)
})

// this means that in order to be able to fully get the properties of each type, a type guard can be used
peopleCollection.forEach((item: Person) => {
    if('company' in item){  // infer item to be of type Supplier
        console.log(`\n[${item.id}](${item.company }) ${item.name} ${item.city}`)
    }
})

// ABSTRACT BASE CLASSES
// abstract base class is a class that is created soley to be subclassed by other classes and not meant to instantiated from
// in other words, abstract base classes can be used to create objects

abstract class PaymentProcessor{
    constructor(public paymentMethod: string, public type: string, public paymentGateway: string){

    }

    abstract pay(from: string, to: string, amount: number): string
}

// let bitcoinPayment = new PaymentProcessor() // will not work because Payment Processor is an abstract class

class BitcoinPaymentProcessor extends PaymentProcessor{
    constructor(public paymentMethod: string, public type: string, public paymentGateway: string){
        super(paymentMethod, type, paymentGateway)
    }

    pay(from: string, to:string, amount:number){
        return `payed ${amount}BTC from ${from} to ${to}`
    }
}

let btcPayment = new BitcoinPaymentProcessor("P2P", "crypto", "Binance")
console.log(btcPayment.pay("0x48dse38wa8jkse89w", "0x43asdnsjddsjdjj7ft", 0.5))

// USING INTERFACES
// interfaces are used to describe shape of an object similar to the way that types does it.

interface PaymentMethod<T> {
    authorizer:T,
    type: string,
    pay(from: string, to: string, amount: number): string
}

class BTCAuthorizer{
    
}

class BtcPaymentMethod implements PaymentMethod<BTCAuthorizer>{

    constructor(public authorizer: BTCAuthorizer, public type:string){
        this.authorizer = authorizer
        this.type = type
    }

    pay(from: string, to:string, amount: number): string{
        return `[${amount}BTC] sent from ${from} to ${to}`
    }
}

// Unlike abstract classes, Interfaces dont contain methods, they just contain signatures for methods and provides interfaces that must be 
// implemented by any class that uses them

// a single class can implement mutiple interface 
interface Human {
    name: string,
    age: number,
    gender: string,

}

interface Female {
    breastfeedBaby(babyName: string): void
    giveBirth(): string
}

// when a class implments multiple interfaces, it must provide the methods and properties of both interface
class Woman implements Human, Female{
    constructor(public name: string, public age: number, public gender: string){
        //
    }

    breastfeedBaby(babyName: string): void {
        console.log(`I have finished breast feeding baby ${babyName}`)
    }

    giveBirth(): string {
        return `i have given birth to a baby boy`
    }
}


