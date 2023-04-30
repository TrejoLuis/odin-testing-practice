//a function that takes a string and returns it reversed
const reverseString = str => {
  if(typeof str !== 'string') throw new Error('The input value must be a string')
  let output = ''
  for(let i=str.length-1;i>=0;i--)
    output+=str[i]

  return output
}

export {reverseString}
