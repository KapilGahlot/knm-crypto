//binary, hex, ascii, unicode, utf-8

//ArrayBuffer, Uint8Array, TextEncoder 

const util = require('util');
let encoder = new util.TextEncoder();
let uint8Array = encoder.encode("Dog");
console.log(uint8Array);

const buff = Buffer.from("Dog")
console.log("buff : ", buff)
console.log("buff : ", buff.toJSON())

//base64 [A-Z a-z 0-9 + /]
console.log("buff : ", buff.toString("base64"))
//68 111 103
//01000100 01101111 01100111
//010001 000110 111101 100111
//17 6 61 39
//R G 9 n
