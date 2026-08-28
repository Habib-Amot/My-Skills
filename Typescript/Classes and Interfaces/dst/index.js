"use strict";
// classes in typescript are an elegant way of creating object blueprint and typescript come with rich feature tha allows working with classes 
// more easier, cleaner and safer
class User {
    constructor(id, username, accountBalance, accountNumber, totalItemsInCart) {
        this._id = id;
        this.username = username;
        this.accountBalance = accountBalance;
        this.totalItemsInCart = totalItemsInCart;
        this.accountNumber = accountNumber;
    }
    get id() {
        return this._id;
    }
}
let Bob = new User(121232, "Bobber", 10000, 8079091367, 3);
// console.log(Bob.id)  // id cannot be accessed as it is private and only accessible within class 'User'
// trying to change Bob's account number is not possible
// Bob.accountNumber = 5342626245  // Cannot assign to 'accountNumber' because it is a read-only property.
console.log(`[${Bob.id}]: ${Bob.username} => Balance: $${Bob.accountBalance}`);
// a more concise way of declaring function contructor
class Product {
    constructor(name, id, price) {
        this.name = name;
        this.id = id;
        this.price = price;
        // no statement needed, object will define properties itself
    }
}
let glove = new Product('Gloves', 323441, 400);
console.log(`${glove.name} costs ${glove.price}`);
// CLASS INHERITANCE
class Person {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
        // no statement
    }
}
class Employee extends Person {
    constructor(id, name, city, salary) {
        super(id, name, city); //initialize parent object
        this.id = id;
        this.name = name;
        this.city = city;
        this.salary = salary;
        this.salary = salary;
    }
}
class Supplier extends Person {
    constructor(id, name, city, company) {
        super(id, name, city);
        this.id = id;
        this.name = name;
        this.city = city;
        this.company = company;
        this.company = company;
    }
}
class Customer extends Person {
    constructor(id, name, city, longTermValue) {
        super(id, name, city);
        this.id = id;
        this.longTermValue = longTermValue;
        this.longTermValue = longTermValue;
    }
}
// the union of these different classes result in a type that contains properties that is common to all the types which is the Person interface
// this means that only properties i.e methods and attributes that belongs to the Person class will be allowed on each data items or instances
let peopleCollection = [
    new Supplier("102", "Brigget Rubber", "North Carolina", "Brigget Rubber & Co."),
    new Employee("001-2a", "Amot", "Lagos", 30000),
    new Customer("243-2as-100", "Bobby", "South Carolina", 20000)
];
peopleCollection.forEach((item) => {
    console.log(`\n[${item.id}] ${item.name} ${item.city}`);
});
// this means that in order to be able to fully get the properties of each type, a type guard can be used
peopleCollection.forEach((item) => {
    if ('company' in item) { // infer item to be of type Supplier
        console.log(`\n[${item.id}](${item.company}) ${item.name} ${item.city}`);
    }
});
// ABSTRACT BASE CLASSES
// abstract base class is a class that is created soley to be subclassed by other classes and not meant to instantiated from
// in other words, abstract base classes can be used to create objects
class PaymentProcessor {
    constructor(paymentMethod, type, paymentGateway) {
        this.paymentMethod = paymentMethod;
        this.type = type;
        this.paymentGateway = paymentGateway;
    }
}
// let bitcoinPayment = new PaymentProcessor() // will not work because Payment Processor is an abstract class
class BitcoinPaymentProcessor extends PaymentProcessor {
    constructor(paymentMethod, type, paymentGateway) {
        super(paymentMethod, type, paymentGateway);
        this.paymentMethod = paymentMethod;
        this.type = type;
        this.paymentGateway = paymentGateway;
    }
    pay(from, to, amount) {
        return `payed ${amount}BTC from ${from} to ${to}`;
    }
}
let btcPayment = new BitcoinPaymentProcessor("P2P", "crypto", "Binance");
console.log(btcPayment.pay("0x48dse38wa8jkse89w", "0x43asdnsjddsjdjj7ft", 0.5));
