
/**
 * 
 * @param {Record<string, string>} pojo 
 */
export function getMaxLengthofKeys(pojo){
  const keysLengths = Object
  .keys(pojo)
  .map(({length}) => length)

  return Math.max(...keysLengths)
}


/**
 * 
 * @param {Record<string, string>} pojo 
 */
export const getFirstLettersOfValues = pojo => Object
  .keys(pojo)
  .reduce((result, next) =>{
    result[next[0]] =  true
    return result
  }, {})


/**
 * 
 * @param {Record<string, string>} pojo 
 */
export const swapPojo  = pojo => Object
  .keys(pojo)
  .reduce((prev, key)=> {
    const value = pojo[key]
    prev[value] = key
    return prev
  }, {})



/**
 * 
 * @param {Record<string, string>} object 
 * @returns 
 */
export function rexifyKeys(object){
  const preRexify = Object
      .keys(object)
      .join(('|')

  return new RegExp(preRexify, "ig")
}

