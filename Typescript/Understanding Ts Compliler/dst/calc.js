export function sum(...num) {
    return num.reduce((prev, item) => {
        return prev + item;
    });
}
