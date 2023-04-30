import  {reverseString} from '../reverseString.js'


test('should accept only string type', () => {
  expect(() => reverseString(123)).toThrow('The input value must be a string')
  expect(() => reverseString(['a', 'b', 'c'])).toThrow('The input value must be a string')
  expect(() => reverseString({foo: 'bar', baz: 'bundy'})).toThrow('The input value must be a string')
  expect(() => reverseString(true)).toThrow('The input value must be a string')
  expect(() => reverseString(Symbol('foo'))).toThrow('The input value must be a string')
})

test('should return a reversed string input', () => {
  expect(reverseString('foo')).toBe('oof')
  expect(reverseString(" foo bar bazz ")).toBe(" zzab rab oof ")
  expect(reverseString("%$#CBA321")).toBe("123ABC#$%")
})

// redundant test
// test('should be a function', () => {
//   expect(typeof reverseString).toBe('function')})
