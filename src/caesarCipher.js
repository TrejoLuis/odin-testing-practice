export const caesarCipher = (str, shift,...rest) => {
  const errMsgNParams = 'there must be only two values'
  const errMsgNoStr = 'the first value must be a string'
  const errMsgNoNum = 'the second value must be a number'
  if(rest.length > 0 || typeof str == 'undefined' || typeof shift == 'undefined') throw new Error(errMsgNParams)
  if(typeof str !== 'string') throw new Error(errMsgNoStr)
  if(typeof shift !== 'number' || Number.isNaN(shift)) throw new Error(errMsgNoNum)
  
}
