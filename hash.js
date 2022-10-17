const { createHash } = require("crypto")

const hash = createHash("sha256")

const message  = "Hashing dog"

const digest = hash.update(message).digest("hex")

console.log("hash : ", digest)