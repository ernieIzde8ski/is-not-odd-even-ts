type Type = (input: number) => boolean;

export const isEven:    Type = input => ([0, 2, 4, 6, 8].includes(Number(String(input)[String(input).length - 1])) && input == Math.floor(input)) ? true : false;
export const isNotEven: Type = input => !isEven(input) ? true : false; 
export const isOdd:     Type = input => isNotEven(input) && input == Math.floor(input) ? true : false;
export const isNotOdd:  Type = input => !isOdd(input) ? true : false;
