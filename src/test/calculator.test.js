import {calculator} from '../calculator.js'


test('calculator should have add, subtract, divide and multiply functions', () => {
  expect(typeof calculator.add).toBe('function')
  expect(typeof calculator.subtract).toBe('function')
  expect(typeof calculator.divide).toBe('function')
  expect(typeof calculator.multiply).toBe('function')
})

test('should throw a message if there are not only two values provided', () => {
  const error = 'only two values must be provided'
  expect(() => calculator.add(5)).toThrow(error)
  expect(() => calculator.add(5,6,7)).toThrow(error)
  expect(() => calculator.add(5,6,7,8)).toThrow(error)
  expect(() => calculator.subtract(5)).toThrow(error)
  expect(() => calculator.subtract(5,6,7,8)).toThrow(error)
  expect(() => calculator.divide(5)).toThrow(error)
  expect(() => calculator.divide(5,6,7,8)).toThrow(error)
  expect(() => calculator.multiply(5)).toThrow(error)
  expect(() => calculator.multiply(5,6,7,8)).toThrow(error)
})

test('should throw if values provided are not number', () => {
  const error = 'values provided must be number'
  expect(() => calculator.add(13,true)).toThrow(error)
  expect(() => calculator.add('10',[])).toThrow(error)
  expect(() => calculator.subtract(13,true)).toThrow(error)
  expect(() => calculator.subtract('10',[])).toThrow(error)
  expect(() => calculator.divide(13,true)).toThrow(error)
  expect(() => calculator.divide('10',[])).toThrow(error)
  expect(() => calculator.multiply(13,true)).toThrow(error)
  expect(() => calculator.multiply('10',[])).toThrow(error)
})

test('should throw if some value provided is NaN', ()=> {
  const error = 'values provided must be number'
  expect(() => calculator.add(NaN, 10)).toThrow(error)
  expect(() => calculator.add(12, 0/0)).toThrow(error)
  expect(() => calculator.subtract(NaN, 10)).toThrow(error)
  expect(() => calculator.subtract(12, 0/0)).toThrow(error)
  expect(() => calculator.divide(NaN, 10)).toThrow(error)
  expect(() => calculator.divide(12, 0/0)).toThrow(error)
  expect(() => calculator.multiply(NaN, 10)).toThrow(error)
  expect(() => calculator.multiply(12, 0/0)).toThrow(error)
})

test('should return the respective operation', () => {
  expect(calculator.add(3,6)).toBe(9)
  expect(calculator.subtract(3,6)).toBe(-3)
  expect(calculator.divide(3,6)).toBe(0.5)
  expect(calculator.multiply(3,6)).toBe(18)
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3)
  expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2)
  expect(calculator.divide(0.1, 0.3)).toBeCloseTo(0.333)
  expect(calculator.multiply(0.3, 0.2)).toBe(0.06)
})


//Redundant
// test('should throw if there is no value provided', () => {
//   expect(() => calculator.add()).toThrow()
//   expect(() => calculator.subtract()).toThrow()
//   expect(() => calculator.divide()).toThrow()
//   expect(() => calculator.multiply()).toThrow()
// })
//
// test('should not be undefined', () => {
//   expect(calculator).toBeDefined()
// })
