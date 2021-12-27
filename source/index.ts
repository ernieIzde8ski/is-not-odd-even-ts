export function isEven(input: number): boolean {
    if ([0, 2, 4, 6, 8].includes(Number(String(input)[String(input).length - 1])) && input == Math.floor(input)) {
        return true;
    } else {
        return false;
    }
}


export function isNotEven(input: number): boolean {
    return !isEven(input);
}


export function isOdd(input: number): boolean {
    return isNotEven(input) && input == Math.floor(input);
}


export function isNotOdd(input: number): boolean {
    return !isOdd(input);
}
