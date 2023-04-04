import { defaultReplacesDict } from "../config/cipher.js"
import { rexifyKeys, swapPojo } from "../utils/words.js"

export class Cipherer{
  constructor(dict = defaultReplacesDict){
      this.originalDict = dict
      this.reversedDict = swapPojo(dict)
      this.rexifiedOriginalKeys = rexifyKeys(dict)
      this.rexifiedReversedKeys = rexifyKeys(this.reversedDict)
  }

  static replaceCipher(text, regExp, dict){
      return text.replace(regExp, match => dict[match])
  }

  cipher(text){
      return Cipherer.replaceCipher(
              text, 
              this.rexifiedOriginalKeys, 
              this.originalDict
          )
  }

  decipher(text){
      return Cipherer.replaceCipher(
          text,
          this.rexifiedReversedKeys,
          this.reversedDict
      )
  }
}
