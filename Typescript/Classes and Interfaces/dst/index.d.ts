declare class User {
    private readonly _id;
    username: string;
    accountBalance: number;
    totalItemsInCart: number | undefined;
    readonly accountNumber: number;
    constructor(id: number, username: string, accountBalance: number, accountNumber: number, totalItemsInCart?: number);
    get id(): number;
}
declare let Bob: User;
declare class Product {
    name: string;
    private readonly id;
    price: number;
    constructor(name: string, id: number, price: number);
}
declare let glove: Product;
declare class Person {
    id: string;
    name: string;
    city: string;
    constructor(id: string, name: string, city: string);
}
declare class Employee extends Person {
    id: string;
    name: string;
    city: string;
    salary: number;
    constructor(id: string, name: string, city: string, salary: number);
}
declare class Supplier extends Person {
    id: string;
    name: string;
    city: string;
    company: string;
    constructor(id: string, name: string, city: string, company: string);
}
declare class Customer extends Person {
    id: string;
    longTermValue: number;
    constructor(id: string, name: string, city: string, longTermValue: number);
}
declare let peopleCollection: (Employee | Supplier | Customer)[];
declare abstract class PaymentProcessor {
    paymentMethod: string;
    type: string;
    paymentGateway: string;
    constructor(paymentMethod: string, type: string, paymentGateway: string);
    abstract pay(from: string, to: string, amount: number): string;
}
declare class BitcoinPaymentProcessor extends PaymentProcessor {
    paymentMethod: string;
    type: string;
    paymentGateway: string;
    constructor(paymentMethod: string, type: string, paymentGateway: string);
    pay(from: string, to: string, amount: number): string;
}
declare let btcPayment: BitcoinPaymentProcessor;
interface PaymentMethod<T> {
    authorizer: T;
    pay(): void;
}
