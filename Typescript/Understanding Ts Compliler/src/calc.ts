export function sum(...num: number[]): number{
    return num.reduce((prev: number, item: number): number => {
        return prev + item
    })
}