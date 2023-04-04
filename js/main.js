import { Cipherer } from "./functions/cipher.js"

const [
  buttonCipher,
  textAreaToCipher,
  cipheredTextContainer,
  buttonDecipher,
  cardContainer,
  copyButton
] =  [
  '[data-button="cipher"]',
  '[data-textarea="input-text"]',
  '[data-result="text-result"]',
  '[data-button="decipher"]',
  '[data-card="result"]',
  '[data-button="copy"]'
].map(selector => document.body.querySelector(selector))


function hideManIcon(){
  cardContainer
    .querySelector(".to-hide")
    .classList.add("hidden")

  cardContainer
    .classList
    .replace('justify-center', 'justify-between')

  copyButton
    .classList.remove("hidden")

}

copyButton?.addEventListener('click', async ()=>{
  await navigator
    .clipboard
    .writeText(cipheredTextContainer.textContent)

  console.log("Se copio con exito")

})

const cipherer = new Cipherer()


buttonCipher?.addEventListener('click', () => {
  const cipheredText = cipherer.cipher(textAreaToCipher.value)

  cipheredTextContainer.textContent = cipheredText
  hideManIcon()
  
})

buttonDecipher?.addEventListener('click', () => {
  const cipheredText = cipherer.decipher(textAreaToCipher.value)

  cipheredTextContainer.textContent = cipheredText
  hideManIcon()
})






