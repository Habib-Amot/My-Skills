declare let userDetails: {
    name: string;
    username: string;
    contact: string;
    age: number;
};
declare let transactions: {
    transactionId: string;
    sentFrom: string;
    sentTo: string;
    amount: number;
}[];
declare let product: {
    name: string;
    price?: number;
    waterProof?: boolean;
};
type Product = {
    name: string;
    price: number;
    waterProof?: boolean;
    getDiscount?(): number;
};
declare let hat: Product;
type Person = {
    id: number;
    name: string;
    city: string;
};
type Item = {
    id: number;
    name: string;
    price: number;
};
declare let glove: Item;
declare let firstManOnMoon: Person;
declare let dataCollection: (Person | Item)[];
type Employee = {
    company: string;
    department: string;
    position: string;
    salary?: number;
};
declare let Hammot: Person & Employee;
declare let bob: EmployedPerson;
type EmployedPerson = Person & Employee;
declare let Employees: EmployedPerson[];
