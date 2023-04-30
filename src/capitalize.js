//A function that takes a string and returns it with the first character capitalized
const capitalize = (str) => {
  if(typeof str !== 'string') throw new Error('The value must be a string')
  if(str.match(/^( )+$/)) throw new Error('The string only contains white spaces')
  if(str.match(/^[^a-z|A-Z]/)) throw new Error('The first character must be [a-z]')
  const output = str.slice(0,1).toUpperCase()+str.slice(1)
  return output 
}

export{
  capitalize
}
