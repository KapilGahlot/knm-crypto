//This file provides examples for the code that was executed in the browser console

//First open browser console and copy paste the code from jsencrypt.js in this lib and press enter in the console.

//You can execute below code in the connsole to encrypt

let encrypt = new JSEncrypt()
let pubk1 = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzawRqcCcDntpDeIWci6g\nNcNlvIcrC20Anf5pQCgkFn351rXbMNZUYJo9Y6yhCQYMjHZxTUTVsEaUSamANJ9r\nxweywEK5V1I+zGYWG7lpLpg2vdYO53TE3EFnitb5vk9JELyNt71Y4hiXd+82/tg0\nSjuze4Mby+9AKXhQfjKnJs1O4Ugw/+o8mORPq53hQf9hI9geOPxCxBaWsGZzOyFR\nRlgkTni+ieg791qyJw1pvBIn3R1UnGtQy59ybXVRN9LHal4nQWqdrzWH6KP9B8WE\ntDPm2rHvgyEDfe8TZgw6GQabHSu8n3coxu5aywHkPmKmOzxrxhWMD7xrAhGXDX/0\ngwIDAQAB\n-----END PUBLIC KEY-----\n"
encrypt.setPublicKey(pubk1)
let encrypted = encrypt.encrypt("hello node from browser 134")
console.log("encrypted : ", encrypted) // You can copy paste this value in asym.js as value of ciphertext to test decryption

//Below is the code for hashing in the browser (taken from MDN)
const text = 'Hashing dog';

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // encode as (utf-8) Uint8Array
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // hash the message
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convert buffer to byte array
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
  return hashHex;
}

digestMessage(text)
  .then((digestHex) => console.log(digestHex));
