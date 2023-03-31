export const defaultReplacesDict = Object.freeze({
  a: "en",
  e: "in",
  i: "un",
  o: "as",
  u: "ol"
})

export const defaultReverseDict = Object.freeze(Object
  .keys(defaultReplacesDict)
  .reduce((prev, key)=> {
    const value = defaultReplacesDict[key]
    prev[value] = key
    return prev
}, {}))
