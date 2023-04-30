import {capitalize} from '../capitalize.js'

//test if it's a function
test('capitalize is a function', () => {
  expect(typeof capitalize).toBe('function')})

test('returns a string', () => {
  expect(typeof capitalize('lorem')).toBe('string')})

test('only accepts string value as parameter', () => {
  expect(() => capitalize(123).toThrow('The value must be a string'))})
