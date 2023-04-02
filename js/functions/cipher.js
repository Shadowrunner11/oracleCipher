import { defaultReplacesDict } from "../config/cipher.js"
import { getMaxLengthofKeys } from "../utils/words.js"

/**
 * 
 * @param {string} text 
 * @param {Record<string, string>} replacesDict
 */
export function cipherByDict(text, replacesDict = defaultReplacesDict, isSteppy = true){
  const initFlags = Object.values(replacesDict).reduce((pojo, next)=>{
    pojo[next[0]] = true
  
    return pojo
  }, {})

  let encriptedText = ""

  const maxKeyLenght = getMaxLengthofKeys(replacesDict)

  const emptyArray = Array.from(Array(maxKeyLenght))

  let index  = 0
  while(index < text.length){
    const char = text[index]

    if(initFlags[char]){
      index++
      continue
    }

    const valuesToCipher = emptyArray
      .map((_, subIndex)=> text.substring(index, index + subIndex + 1))

    const toCipherValue = valuesToCipher.find(subString => replacesDict[subString])
    
    const cipheredValue = replacesDict[toCipherValue]

    encriptedText += (cipheredValue ?? text[index])

    const step = isSteppy? 1 : (toCipherValue?.length ?? 1)

    index += step
  }

  return encriptedText
}
