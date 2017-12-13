import {arrayToString, coorStrToArray} from '../../src/utils/string.js'

describe('TEST /utils/string.js', () => {
  it('arrayToString', () => {
    const arr = [1,2,3]
    expect(arrayToString(arr)).toBe('1,2,3')
  })

  it('coorStrToArray', () => {
    const result = coorStrToArray('1,2,3')
    const expectResult = [1,2,3]
    expect(JSON.stringify(result)).toBe(JSON.stringify(expectResult))
  })
})
