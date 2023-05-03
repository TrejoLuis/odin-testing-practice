import {caesarCipher} from '../caesarCipher.js'

describe('CaesarCipher', () => {
  test('is a function', () => {
    expect(typeof caesarCipher).toBe('function')
  })
  test('should throw a specific message if there are not only two parameters', () => {
    const error = 'there must be only two values'
    expect(() => caesarCipher()).toThrow(error)
    expect(() => caesarCipher('foo')).toThrow(error)
    expect(() => caesarCipher('foo','bar','baz')).toThrow(error)
  })
  test('should throw a specific message if the first parameter is not a string', () => {
    const error = 'the first value must be a string'
    expect(() => caesarCipher(123, 3)).toThrow(error)
  })
  test('should throw a specific message if the second parameter is not a number', () => {
    const error = 'the second value must be a number'
    expect(() => caesarCipher('foo', 'bar')).toThrow(error)
  })


})
