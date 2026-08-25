declare let myName: string;
declare function writeTask(taskName: string): void;
declare function calculateTax(amount: number): number;
declare let myDiscount: number;
declare function stripText(word: any): any;
declare function calculateTax_f(amount: number, format: boolean): number | string;
declare let taxValue: string | number;
declare let newTaxValue: string;
declare function findHighestNumber(format?: boolean, ...nums: number[]): string | number;
declare let highestNumber: string | number;
declare function calculateCartItems(items: number[], format?: boolean): string | number;
type User = {
    name: string;
    username: string;
    contactDetails: null | string | number;
};
declare function getUserContactDetails(user: User): string | number | null;
declare let userContact: string | number;
