import { Employee, Person, City, Product } from "./dataTypes";

// creating a class that allows for the working of different class of items

class DataCollections<CollectionType>{  // CollectionType here is a placeholder that will be filled when the class is called
    constructor(public dataItems: CollectionType[]){
        this.dataItems = dataItems
    }

    getItem(itemIndex: number): CollectionType{
        if(itemIndex < this.dataItems.length){
            return this.dataItems[itemIndex]
        }else{
            return null as CollectionType
        }
    }

    addItem(item: CollectionType): void{
        this.dataItems.push(item)
    }
}


// and the class can now be make use of
let personCollection = new DataCollections<Person>([])
personCollection.addItem(new Person("Bob", "London"))

// another class can still be created for another object 
let EmployeeCollection = new DataCollections<Employee>([new Employee("Tim", "Design Team lead")])
EmployeeCollection.addItem(new Employee("Ahmad", "CEO"))

// A class can be stricted to only with certain types alone and not fully generic
// for example restricting the Response class below to only work with APIRespone interface
enum StatusCode {
    OK = 200,
    NotModified = 302,
    MovedPermanently = 301,
    AccessDenied = 401,
    NotFound = 404
}


type Response <Data> = {
    statusCode: StatusCode,
    statusText: string,
    data: Data
}

type APIResponse = {
    name: string,
    age: number
}

class Request<ResponseType extends Response<APIResponse>>{  // making sure only types that conform with Response interface is used
    constructor(public url: string){}

    getData(): Response<APIResponse>{
        return {
            statusCode: StatusCode.OK,
            statusText: "200 OK",
            data: {
                name: "Amot The Dev",
                age: 20
            }
        }
    }
}

let patientInfo = new Request<Response<APIResponse>>('thisIsATesUrl.com')
