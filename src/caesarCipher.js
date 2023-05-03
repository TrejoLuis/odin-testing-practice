const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
const map = new Map()
for(let i=0; i<26; i++){
  map.set(alphabet[i], i)
}

export const caesarCipher = (str, shift,...rest) => {
  const errMsgNParams = 'there must be only two values'
  const errMsgNoStr = 'the first value must be a string'
  const errMsgNoNum = 'the second value must be a number'

  if(rest.length > 0 || typeof str == 'undefined' || typeof shift == 'undefined') throw new Error(errMsgNParams)
  if(typeof str !== 'string') throw new Error(errMsgNoStr)
  if(typeof shift !== 'number' || Number.isNaN(shift)) throw new Error(errMsgNoNum)

  let output = ''
  //encrypting
  for(let i=0; i<str.length; i++){
    if(str[i].match(/[a-zA-Z]/)){
      //rolling over the index both forward and backwards
      let alphabetIndx = (map.get(str[i].toLowerCase()) + shift + 26)% 26
      output += alphabet[alphabetIndx]
    } else output += str[i]
  }

  return output 
  
}
