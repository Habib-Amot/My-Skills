// generators and iterator can be very handy when it comes to generating or returning items in an array one at a time

// iterators
// an iterator is an object that has the next method that is called subsequently to return the next  item with a done attribute that indicate if
// the item is done or not
// here is an implementation of that

class GroceriesList{
    constructor(...items){
        this.groceriesItems = items
        this.currentIndex = 0
        this.listLength = this.groceriesItems.length
    }

    [Symbol.iterator](){
        let currentIndex = this.currentIndex;
        let listLength = this.listLength
        let groceriesItems = this.groceriesItems

        return {
            next: function() {
                if(currentIndex == listLength - 1){
                    let nextItem = {value:groceriesItems[currentIndex], done:true}
                    currentIndex = 0;
                    return nextItem;
                }

                else if(currentIndex < listLength){
                    let nextItem = {value:groceriesItems[currentIndex], done:false}
                    currentIndex++;
                    return nextItem;

                }
            }
        }
    }

}

let shoppingList = new GroceriesList("rice", "beans", "spaghetti", "noodeles", "garri")

for(item of shoppingList){
    console.log(item)
}


// making use of generators
// generators are functions or iteracbles that return their items one at a time and per call
class WinterPackage{
   constructor(packageName, package1, package2, package3){
    this.packageName = packageName
    this.package1 = package1
    this.package2 = package2
    this.package3 = package3
   } 

   *[Symbol.iterator](){
    yield this.package1
    yield this.package2
    yield this.package3
   }
}

let salahPackage = new WinterPackage("Salah Package", 'prayer mat', 'praying kettle', 'clean Jalabiya')
console.log(...salahPackage)