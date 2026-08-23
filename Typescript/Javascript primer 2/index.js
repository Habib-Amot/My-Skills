// Understanding Object inheritance in JS


// it is important to first understand that objects inherits from Object and this can be proven using a handful of function
let user = {
    username: "Amot the dev",
    alias: "Amot",

    printDetails: function(){
        console.log(`Username: ${this.username}\nAlias: ${this.alias}`)
    }
}

let useCartItems = {
    name: "hat",
    price: 500
}

user.printDetails()

// pulling some random that is not explictly defined in the user object
console.log(user.toString())  // the toString method comes from the prototype of the user object which is Object

// confirming this
console.log(Object.getPrototypeOf(user) == Object.getPrototypeOf(useCartItems)) // outputs true because they are both of the same prototype


// custom prototypes can be created in js using constructor function

function ItemConstructor(name, price, taxInc=1.2){
    this.name = name
    this.price = price
    this.taxInc = taxInc
}

// and now the constructor can be used to create new objects

let boots = new ItemConstructor("Cowboy Boot", 500)
console.log("price of the boot is ", boots.price)

// in this case of using a function as the constructor, the prototype of the object that is created is the prototype property of the function
console.log("boot prototype == ItemConstructor.prototype:", Object.getPrototypeOf(boots) == ItemConstructor.prototype)

// to change the prototype of the ItemConstructor so that object inherited from it has the same interface
ItemConstructor.prototype.toString = function(){
    return `${this.name}: $${this.price}`
}

console.log(boots.toString())


// this is the same principle that applies to classes in Javascript

class Product{
    constructor(name, price, taxInc){
        this.name = name
        this.price = price
        this.taxInc = taxInc
    }

    printDetails(){
        console.log(`${this.name} cost $${this.price} with a tax value of ${this.taxInc}`)
    }
}


