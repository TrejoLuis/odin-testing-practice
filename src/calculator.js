// A calculator object that contains functions for the basic
// operations: add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.
const calculator = (() => {
  const errorMsgValQuan = 'only two values must be provided'
  const errorMsgValNotNumber = 'values provided must be number'

  const add = (x, y, ...more) => {
    if(more.length > 0 || typeof x == 'undefined' || typeof y == 'undefined') throw new Error(errorMsgValQuan)
    if(typeof x !== 'number' || typeof y !== 'number'
      || Number.isNaN(x) || Number.isNaN(y)) throw new Error(errorMsgValNotNumber)
    return x + y
  }
  const subtract = (x, y, ...more) => {
    if(more.length > 0 || typeof x == 'undefined' || typeof y == 'undefined') throw new Error(errorMsgValQuan)
    if(typeof x !== 'number' || typeof y !== 'number'
      || Number.isNaN(x) || Number.isNaN(y)) throw new Error(errorMsgValNotNumber)
    return x - y
  }
  const divide = (x, y, ...more) => {
    if(more.length > 0 || typeof x == 'undefined' || typeof y == 'undefined') throw new Error(errorMsgValQuan)
    if(typeof x !== 'number' || typeof y !== 'number'
      || Number.isNaN(x) || Number.isNaN(y)) throw new Error(errorMsgValNotNumber)
    return x / y
  }
  const multiply = (x, y, ...more) => {
    if(more.length > 0 || typeof x == 'undefined' || typeof y == 'undefined') throw new Error(errorMsgValQuan)
    if(typeof x !== 'number' || typeof y !== 'number'
      || Number.isNaN(x) || Number.isNaN(y)) throw new Error(errorMsgValNotNumber)
    return x * y
  }
  
  return{
    add,
    subtract,
    divide,
    multiply
  }
})()

export {calculator}
