export const arrayToString = (arr) => `${arr.toString()}`

export const coorStrToArray = (str) => str.split(',').map(item => parseInt(item, 10))