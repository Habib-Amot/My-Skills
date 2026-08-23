import { sum } from "./calc.js"

function showUsername(username: string): void{
    console.log(`username is ${username}`)
}

// calling the function with a wrong value to observer compiler behavior

// showUsername(45) // Error:  Argument of type 'number' is not assignable to parameter of type 'string'

showUsername("Amot the dev")

// document.getElementsByClassName("amot-button")  // this is allowed the api is marked as allowed in the tsconfig file
console.log(sum(1, 2, 4, 5))
