declare let prices: number[];
declare let itemNames: string[];
declare function writePrice(price: number): string;
declare let goodsPrices: (string | number)[];
declare let studentIncome: any[];
declare let airplaneSetMapping: [string, number][];
declare enum UserFavoriteContent {
    Sales = 0,
    Skits = 1,
    Comedy = 2,
    Preaching = 3,
    Motivation = 4
}
declare let myFavoriteContent: UserFavoriteContent;
declare enum Product {
    Glove = 0,
    Socks = 10,
    Boots = 11,
    Hat = 20,
    Robe = 21
}
declare enum InternetErrors {
    NetConnectionError = "No internet connection please try again later",
    NetUnkownHost = "Unknown remote or local host",
    DNSProbeError = "Not able to resolve host dsn"
}
declare const enum ErrorCodes {
    NotFound = 404,
    PermissionDenied = 403,
    UnAuthorized = 401,
    StatusOK = 200
}
declare let userResponseCode: number;
declare let allowedAge: 15 | 25 | 30;
declare function calculateTaxt(amount: number, discount: number): 200 | 500 | 350;
