// symbols is a primitive data type in js that allows unique value to be created anytime they are called and regardless of the name passed to it

// the Symbol class is used to create a symbol
let nameSymbol = Symbol("habib")

// and now this name can be accessed using the refrence name that is passed to it

// and also it can be used as object property
let userDetails = {
    [nameSymbol]: "Amot the dev",
    username: "Amot"
}

console.log(userDetails[nameSymbol])

// and the most useful cases where symbol is used is in defining or making use of language and user defined interfaces
// for example, the iterator interface

class Cartitems{
    constructor(...items){
        this.name = "Amot list"
        this.itemsInCart = items;
    }

    // and now defining an interface that allows the cart items to be iterable
    [Symbol.iterator](){
        let iteratorInterface = this.itemsInCart[Symbol.iterator]()
        return {
            next(){
                return iteratorInterface.next()
            }
        }
    }

    // customizing object return value when toString is called
    [Symbol.toPrimitive](hint){
        switch(hint){
            case "number":
                return 5
            case "string":
                return this.name
        }
    }
}

let items = new Cartitems(2, 3, 4)
console.log([...items])

console.log(Number(items))  // this is going to call Symbol.toPrimitive
// console.log([1, 3, 4][Symbol.iterator]().next())

let globalSymbolInterface = {
    processPayment: Symbol("Payment Process interface"),
    shillingsTooNaira: Symbol("Convert shillings to Naira"),
    fiatToBTC: Symbol("Convert fiat money to BTC")
}

class NairaPaymentProcessor{
    constructor(amount, from, to){
        this.amount = amount
        this.from = from
        this.to = to
    }

    // using a global interface that will be provided by all processors
    [globalSymbolInterface.processPayment](){
        return `[$${this.amount}]: from ${this.from} -> To ${this.to}`
    }
}

let nairaProcessor = new NairaPaymentProcessor(500, "564335", "123455433")
console.log(nairaProcessor[globalSymbolInterface.processPayment]())
