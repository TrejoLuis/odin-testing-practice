import {analyzeArray} from '../analyzeArray.js'

describe('analyzeArray', () => {
  test('is a function', () => {
    expect(typeof analyzeArray).toBe('function')
  })

  test('should throw specific message if the input is not an array of only numbers', () => {
    const error = 'values must be numbers'
    expect(() => analyzeArray('foo',1,false,NaN)).toThrow(error)
  })

  test('should return an object', () => {
    expect(typeof analyzeArray(1,8,3,4,2,6)).toBe('object')
  })

  test('should average property calculated from input', () => {
    expect(analyzeArray(1,8,3,4,2,6)).toMatchObject({average: 4})
  })
  test('should return min property', () => {
    expect(analyzeArray(1,8,3,4,2,6)).toMatchObject({min: 1})
  })
  test('should return max property', () => {
    expect(analyzeArray(1,8,3,4,2,6)).toMatchObject({max: 8})
  })
  test('should return length property', () => {
    expect(analyzeArray(1,8,3,4,2,6)).toMatchObject({length: 6})
  })
  test('should return average,min,max and length properties', () => {
    expect(analyzeArray(3,-2,-10,20,14,11)).toEqual({
      average: 6,
      min: -10,
      max: 20,
      length: 6
    })
    expect(analyzeArray(1,8,3,4,2,6)).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    })
  })
})
