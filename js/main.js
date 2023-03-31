import { defaultReverseDict } from "./config/cipher.js"
import { cipherByDict } from "./functions/cipher.js"

const [
  buttonCipher,
  textAreaToCipher,
  cipheredTextContainer,
  buttonDecipher
] =  [
  "cipher",
  "to-cipher-text",
  "ciphered-text",
  "decipher"
].map( id => document.getElementById(id))


buttonCipher?.addEventListener('click', () => {
  const cipheredText = cipherByDict(textAreaToCipher.value)

  cipheredTextContainer.textContent = cipheredText

})

buttonDecipher?.addEventListener('click', () => {
  const cipheredText = cipherByDict(textAreaToCipher.value, defaultReverseDict, false)

  cipheredTextContainer.textContent = cipheredText
})






