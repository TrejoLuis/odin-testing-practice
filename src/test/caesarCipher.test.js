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

  test('should return a cipher message', () => {
    expect(caesarCipher('foo', 1)).toBe('gpp')
    expect(caesarCipher('foo, bar', 1)).toBe('gpp, cbs')
    expect(caesarCipher('Hello World', 1)).toBe('ifmmp xpsme')
  })
  test('shift can be negative', () => {
    expect(caesarCipher('foo', -1)).toBe('enn')
    expect(caesarCipher('hello world', -1)).toBe('gdkkn vnqkc')
  })
  test('if the shift overlaps the alphabet index, then must roll over', () => {
    expect(caesarCipher('foo, bar, baz', 1)).toBe('gpp, cbs, cba')
    expect(caesarCipher('foo, bar, baz', -1)).toBe('enn, azq, azy')
    expect(caesarCipher('foo, bar, baz', 5)).toBe('ktt, gfw, gfe')
  })

})
