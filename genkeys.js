const {generateKeyPair} = require("crypto")
const fs = require("fs")

generateKeyPair('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'spki',
      format: 'pem'
    },
    privateKeyEncoding: {
      type: 'pkcs8',
      format: 'pem',
    }
  }, (err, publicKey, privateKey) => {
    // Handle errors and use the generated key pair.
    console.log("err : ", err)
    console.log("pub : ", publicKey)
    console.log("pvt : ", privateKey)
    fs.writeFileSync("pubk", JSON.stringify({ key: publicKey}),'utf8')
    fs.writeFileSync("pvtk", JSON.stringify({ key: privateKey}),'utf8')
  });