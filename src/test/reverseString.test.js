import  {reverseString} from '../reverseString.js'

test('should be a function', () => {
  expect(typeof reverseString).toBe('function')})

test('should accept only string type', () => {
  expect(() => reverseString(123)).toThrow('The input value must be a string')
  expect(() => reverseString(['a', 'b', 'c'])).toThrow('The input value must be a string')
  expect(() => reverseString({foo: 'bar', baz: 'bundy'})).toThrow('The input value must be a string')
  expect(() => reverseString(true)).toThrow('The input value must be a string')
  expect(() => reverseString(Symbol('foo'))).toThrow('The input value must be a string')
})

