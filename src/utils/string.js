export const arrayToString = (arr) => `${arr.toString()}`

export const coorStrToArray = (str) => str.split(',').map(item => parseFloat(item, 10))