"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataTypes_1 = require("./dataTypes");
// creating a class that allows for the working of different class of items
class DataCollections {
    constructor(dataItems) {
        this.dataItems = dataItems;
        this.dataItems = dataItems;
    }
    getItem(itemIndex) {
        if (itemIndex < this.dataItems.length) {
            return this.dataItems[itemIndex];
        }
        else {
            return null;
        }
    }
    addItem(item) {
        this.dataItems.push(item);
    }
}
// and the class can now be make use of
let personCollection = new DataCollections([]);
personCollection.addItem(new dataTypes_1.Person("Bob", "London"));
// another class can still be created for another object 
let EmployeeCollection = new DataCollections([new dataTypes_1.Employee("Tim", "Design Team lead")]);
EmployeeCollection.addItem(new dataTypes_1.Employee("Ahmad", "CEO"));
// A class can be stricted to only with certain types alone and not fully generic
// for example restricting the Response class below to only work with APIRespone interface
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["NotModified"] = 302] = "NotModified";
    StatusCode[StatusCode["MovedPermanently"] = 301] = "MovedPermanently";
    StatusCode[StatusCode["AccessDenied"] = 401] = "AccessDenied";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
})(StatusCode || (StatusCode = {}));
class Request {
    constructor(url) {
        this.url = url;
    }
    getData() {
        return {
            statusCode: StatusCode.OK,
            statusText: "200 OK",
            data: {
                name: "Amot The Dev",
                age: 20
            }
        };
    }
}
let patientInfo = new Request('thisIsATesUrl.com');
