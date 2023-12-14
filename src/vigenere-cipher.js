const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.reverseMachine(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return this.reverseMachine(encryptedMessage, key, false);
  }

  reverseMachine(message, key, isEncrypt) {
    let result = '';
    key = key.toUpperCase();
    for (let i = 0, j = 0; i < message.length; i++) {
      const currentChar = message[i].toUpperCase();
      const index = this.alphabet.indexOf(currentChar);
      if (index === -1) {
        result += currentChar;
        continue;
      }
      const keyChar = key[j % key.length];
      const keyIndex = this.alphabet.indexOf(keyChar);
      const shiftedIndex = isEncrypt ? (index + keyIndex) % 26 : (index - keyIndex + 26) % 26;
      result += this.alphabet[shiftedIndex];
      j++;
    }
    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
