// this lesson deals primarily with the overview of js arrays and objects as well as how this keyword is being resolved 

let names = ["Hats", "Gloves", "Boots"];
let prices = [];

// adding prices to the price array
prices.push(10)
prices.push(5)
prices.push(100)

let sumPrices = (...numbers) => {
    return numbers.reduce((prev, newValue)=> prev + (Number.isNaN(Number(newValue)) ? 0 : Number(newValue)), 0)  // taking the pessimistic approach 
}

let totalPrice = sumPrices(...prices)
console.log(totalPrice)

let usersAge = [23, 56, 78, 45, 44, 32, 56, ...[..."Habib"].map(item=>item.codePointAt(0)), 65, 128512, 45, 20]

const [lastAge, firstAge] = [usersAge.pop(), usersAge.shift()]
console.log(lastAge, firstAge)

let highestUserAge = usersAge.reduce((prev, newValue)=> Math.max(prev, newValue), 0)
console.log("Highest User age", highestUserAge)

let sortedUserAge = usersAge.sort()
console.log("Age sorted", sortedUserAge)

// Array check functions
console.log(usersAge.every(item => item > 20))  // checking if all the items in the array satisfies the requirement provided
console.log(usersAge.some(age => age > 70))  // checking if there are users whose age is greater than 70 years
console.log(usersAge.filter(age => age > 50))  // getting ages that are greater than 50 alone

// finding the first age that is greater than 55
console.log(usersAge.find(item => item > 55))

// getting a new array from the ages array using map
let ageToChar = usersAge.map(age => ({codePoint: age, char: String.fromCodePoint(age)}))
// ageToChar = usersAge.map(age => String.fromCodePoint(age)).join("")

console.log(ageToChar)


// setters and getters in objects

userCart = {
    username: "Amot the Dev",
    items: [
        {
            name: "hat",
            _price: 200,
            priceIncTax: 200 * 1.2,

            set price(newPrice){
                this._price = Number(newPrice)
                this.priceIncTax = this.price * 1.2
            },

            get price(){
                return this._price
            },

            writeDetails(){
                console.log(`${this.name} is $${this.price} and taxed price is $${this.priceIncTax}`)
            }
        },
        {
            name: "Boot",
            _price: 300,
            priceIncTax: 300 * 1.2,

            set price(newPrice){
                this._price = Number(newPrice)
                this.priceIncTax = this.price * 1.2
            },

            get price(){
                return this._price
            },

            writeDetails(){
                console.log(`${this.name} is $${this.price} and taxed price is $${this.priceIncTax}`)
            }
        },

    ]
}

userCart.items.forEach(item => {
    let func = item.writeDetails.bind(item)
    func();
})

//understanding this in Arrow function
let hat = {
    name: "hat",
    price: 300,
    showDetails: () => {
            // in this case, this is binded to the scope in which this arrow function is defined in this case, the global object
            console.log(`${this.name} is $${this.price}`)
    },

    printDetails: function() {
        return () => {
            // in this case, this is binded to the scope in which this arrow function is defined in this case, the global object
            console.log(`${this.name} is $${this.price}`)
        }  
    }
}

hat.showDetails()  // this in the function is binded to global object regarless of where it is being called
// meanwhile if the printDetails function is called via the object, this in the arrow function will be binded to the this in the function scope
let func = hat.printDetails()
func()
