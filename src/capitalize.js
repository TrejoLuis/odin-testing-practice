//A function that takes a string and returns it with the first character capitalized
const capitalize = (str) => {
  if(typeof str !== 'string') throw new Error('The value must be a string')
  return str
}

export{
  capitalize
}


