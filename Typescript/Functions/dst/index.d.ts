declare function formatNumber(num: number): string;
declare function calculateTax(amount: number, discount: number): number;
type User = {
    name: string;
    age: number;
    contact: null | string;
};
declare function getUserContact(user: User, format?: boolean): string;
declare let user: {
    name: string;
    age: number;
    contact: string;
};
declare function getUserYearOfBirth(user: User, includeName?: boolean): number | string;
declare function showUserDetails(user: User): void;
