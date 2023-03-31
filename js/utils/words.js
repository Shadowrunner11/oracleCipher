
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
