function isEven(input: number): boolean {
    if ([0, 2, 4, 6, 8].includes(Number(String(input)[String(input).length - 1])) && input == Math.floor(input)) {
        return true;
    } else {
        return false;
    }
}


function isNotEven(input: number): boolean {
    return !isEven(input);
}


function isOdd(input: number): boolean {
    return isNotEven(input) && input == Math.floor(input);
}


function isNotOdd(input: number): boolean {
    return !isOdd(input);
}
