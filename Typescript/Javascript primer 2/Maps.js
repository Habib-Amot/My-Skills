// objects in js comes with certain limitation and might not be the ideal option in certain situation
// which involves not beign able to use any other data types as key other than strings
// inclusion of other properties that are not defined by the user
// this makes Map a better in cases like this as they allow key of any type to be used as key and contains only properties defined by user alone

// say a store is to be created with product names as the key and the product list as values
class Product{
    constructor(name, price, manufacturer, expiryDate){
        this.name = name
        this.price = price
        this.expiryDate = expiryDate
        this.manufacturer = manufacturer
    }

    [Symbol.toStringTag](){
        return `Product(${this.name}, ${this.manufacturer})`
    }
    
}

let productMap = new Map()

productMap.set("Amot Facial", new Product("Face wash", 500, "Amot", new Date().toDateString()))
productMap.set("Ysha Cakes", new Product("Red Velvet", 300, "Amot", new Date().toDateString()))


console.log(productMap)