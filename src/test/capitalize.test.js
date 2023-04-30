import {capitalize} from '../capitalize.js'

//test if it's a function
test('capitalize is a function', () => {
  expect(typeof capitalize).toBe('function')})

test('returns a string', () => {
  expect(typeof capitalize('lorem')).toBe('string')})

test('only accepts string value as parameter', () => {
  expect(() => capitalize(123).toThrow('The value must be a string'))})

test('should avoid enter only white spaces', () => {
  expect(() => capitalize('   ')).toThrow('The string only contains white spaces')})

test('the first character must be [a-z]', () => {
  expect(() => capitalize(' 3 $')).toThrow('The first character must be [a-z]')
  expect(() => capitalize('  abc')).toThrow('The first character must be [a-z]')
  expect(() => capitalize('.')).toThrow('The first character must be [a-z]')
  expect(() => capitalize('  hello')).toThrow('The first character must be [a-z]')
})

test('capitalize first character', () => {
  expect(capitalize('hello')).toBe('Hello')
})

test("capitalize first character even if it's a single character", () => {
  expect(capitalize('g')).toBe('G')
  expect(capitalize('A')).toBe('A')
})

