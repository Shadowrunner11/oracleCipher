export const defaultReplacesDict = Object.freeze({
  a: "ai",
  e: "enter",
  i: "imes",
  o: "ober",
  u: "ufat"
})

export const defaultReverseDict = Object.freeze(Object
  .keys(defaultReplacesDict)
  .reduce((prev, key)=> {
    const value = defaultReplacesDict[key]
    prev[value] = key
    return prev
}, {}))
