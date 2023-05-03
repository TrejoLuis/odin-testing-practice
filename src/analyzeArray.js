export const analyzeArray = (...numbers) => {
  const errMsgNoNumber = 'values must be numbers'
  numbers.forEach(num => {
    if(typeof num !== 'number' || Number.isNaN(num))
      throw new Error(errMsgNoNumber)
  })

  const average = numbers.reduce( (prev,cur) => prev += cur, 0) / numbers.length
  const min = Math.min(...numbers) 
  const max = Math.max(...numbers)

  return {
    average,
    min,
    max,
    length: numbers.length
  }
}
