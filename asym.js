const { publicEncrypt, privateDecrypt, constants, sign, verify } = require("crypto")

const publicKey = "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAzawRqcCcDntpDeIWci6g\nNcNlvIcrC20Anf5pQCgkFn351rXbMNZUYJo9Y6yhCQYMjHZxTUTVsEaUSamANJ9r\nxweywEK5V1I+zGYWG7lpLpg2vdYO53TE3EFnitb5vk9JELyNt71Y4hiXd+82/tg0\nSjuze4Mby+9AKXhQfjKnJs1O4Ugw/+o8mORPq53hQf9hI9geOPxCxBaWsGZzOyFR\nRlgkTni+ieg791qyJw1pvBIn3R1UnGtQy59ybXVRN9LHal4nQWqdrzWH6KP9B8WE\ntDPm2rHvgyEDfe8TZgw6GQabHSu8n3coxu5aywHkPmKmOzxrxhWMD7xrAhGXDX/0\ngwIDAQAB\n-----END PUBLIC KEY-----\n"

// const privateKey = "-----BEGIN PRIVATE KEY-----MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQD2c3haNdDyib+4rlWl0rAdgDiTZXCc2qZ9edznJs2yUWGpUH/4aRofZVaA4RSpEGnzg+L8JYTBxKm6TU0kSVi9dZF2ZlnMztj6txlVcb20Dn8nbcmrYObZKljyT0fMdgrbMjW8j19/TfIdKxS7+j4UapzvQzCSHS9mv33zFhMd5q2/15vo2ewey1kBM90mLglr0d4iNAJ1ETts6s7dlM5xObR5SO1UnHuGW0Z/1/IlVUwNiH0dH/NgrFd46asjQx16JJwZWi1T/I4FuLjZ5HMsIqsDYEgKNXI9OP9eEhKgVC0lbgOrIoNsRWs7Rqpk287Hfmo7NduUE6lWj2rUWIM3AgMBAAECggEASHjcQ2rf7vKi9mQNu52hPIugF3gVDYseundDhpXalz1nQqrxdtMxY1ohffSyZqT1Ay8daJh/2ZtDbg2dSbZn6g7Qn8ipT5jkJZYCVSYFaxV4PtgCHet49xOE5Hx72Jw9xQeW1cQziPQa5ojsp/qGlupjC9juR4ldjxFwsDMlm/zOEOnvatfmXyzmbrr8lbf03jB8BJuT0pX6DWNN3HFZcbYBzWgGCQKUOwuNY32Ctn7sKQn+A0NIHYMoFibv1UnyJVXrkOya5Tm1TrpeghBL3hzIgUbT0x4VffhByRpyZyYZimaGfGQ/xUUhNBJGLuGsuiH1MPD07yi5aPzB2mM0AQKBgQD7i7LusRp2+r2csNAK0FUNeY4NgwEYkmp+X5aGEM/LAOlEO0AslxsVGa8GULqG7psD3ildSUQ9lI+R9SZPZj2SCC+WgBeAorPlG+9Kabe92gsoqMbiChCrD32nquAZZtpiIXc/EHshTwkJu/v2+Bu8dL+0YuMRMlfZefXiEc3fwQKBgQD60K0e3Hj8U4MWYZYmELaE2Ch5hUZa33B66Jh3Itt2zigChzqMBHwEXtxiakSMopFwkUTjgPOuj37+xp5nXynKJyS5a3TjgKh65LC1J2WW18S+ojuaJwMwb8EVlUcTBsd3RP/J/CvzXNNNSlL1uIV4SkLPhf18RewoCqNhIh2g9wKBgAwwsPMwUgACFr5JM0vS3MxSX7f36U2vismlCD5nAirsWGGeHXYLvJxBKmI7904ishB167tBmbUCRhLktn6SjdlN3ECG5JyvRdiMigQpK2Zf8rp9s2Ww5y3jCkvd1A5nFZ470POVcOIkWmPGYGePjoiLf97WC/sBXZCEgI38HuYBAoGBAMR1jAUuYL4UlAuF6NxsHuszfZCiKheoCSzc4AABl7IZjRFd5yghoxqxSyLzZjpaZF2uDC2/piBHWgwqe40w50TnIEb0upww/Mc2NovPDi33WK6R2OnIQSFBiBZl1UQ7/SWZMFqAYdTAEurpms3J+RHd6TMwGvuqsW4z1wGQfXDFAoGBAMa9p6NucA5KCplwSGaUjG35pAdG9LKESoU219aDfbkZcemTz48o5AtRkU530Bt/b/YSsLSMKXeXdymlhRB2PIalEGi88tcUlHs63OPPqvZiJGDzBfUQ94wBfSAIXAtIUMspLN3dUd2JCT0DPk/+UBlj15NsGyifmmOzef83Zs+E-----END PRIVATE KEY-----"
const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDNrBGpwJwOe2kN\n4hZyLqA1w2W8hysLbQCd/mlAKCQWffnWtdsw1lRgmj1jrKEJBgyMdnFNRNWwRpRJ\nqYA0n2vHB7LAQrlXUj7MZhYbuWkumDa91g7ndMTcQWeK1vm+T0kQvI23vVjiGJd3\n7zb+2DRKO7N7gxvL70ApeFB+MqcmzU7hSDD/6jyY5E+rneFB/2Ej2B44/ELEFpaw\nZnM7IVFGWCROeL6J6Dv3WrInDWm8EifdHVSca1DLn3JtdVE30sdqXidBap2vNYfo\no/0HxYS0M+base+DIQN97xNmDDoZBpsdK7yfdyjG7lrLAeQ+YqY7PGvGFYwPvGsC\nEZcNf/SDAgMBAAECggEBAJ8k8PnwPxD5r119vy6VI4TWcGeEE+ugaaTXUmvBY8M/\nsU3RpAzTG7EwSCZTUrwfwSADGkLW656dzmp9TOXrIcN9EnSwbKfDzTHuIFdNjbTv\nNRSJiTjR4u4ncc498DuxL/FSZTpyuk8hBjtYj658b2GtdoEw/xY7R+OO5IHyAeME\nALFd14B8ExGqOiXe7/VG1llnnKUjkHP2HgXYf+y+qVY34cwzPbCZLSWEjjv948Eo\nH/0hwsV3qDNtRM4LAftCATaZiQ/rZuiZnPZL52hQ1BtGzFiKDc7L6vKKP3+hlRZ4\nQOxfbFdWhQAKdSnSoSV+TS7K+xfn0c1UrfaPdq+TsbkCgYEA86Mw9dtEnoEH9DLT\nhptzno8/1/gAIY/YbM/yJ7oO3RL9B5WaZMz5lFCHKcwKJDtT+0YKXTo4fDiA81d3\n1wtDnhyJdD5nUj9fxrdqts7ex6VBwCsd3mqQfQ8xlCXjLjlMXv9vLDH6Cs1aQdp1\newfpbeYCepM50QStptMpdaMIbn0CgYEA2Bu2+jYcYQlPcUEflDRFQjQAoss+i8ti\nLC3Pe2PrtV0SwEI1x/dyX8q4ebfNqnEUMKHoqGIHoSIJaKuVt1OoX/KpT8L2vZoq\nqvcnoJL4akwkDfu1X4aYyQlSE2+/27A/Tw8XB5T3ayEF33/oocW5dIW1ZExsRH17\nrhnjjjwoXv8CgYEAgH9QgkrsLQD2tffckkEIwNbioEBfqVPZnMIsAIHj9vtd0pM3\nw/RLqcqzDvtbWfKkf4FYVAUx52pRsIYwYY3CUvDQGiwTiFB+bisssE/5NajWPck/\nzp+7pwnNZ0p4QFfeDLiB5PhS3UGjWdojXgk1N045fnaJ5tCl2bfDRRUAjG0CgYBu\nZaIQqenPbFkn6vO92wHycuxMPXWDJm/NT82pI/86VASLMIeW0oKcCsw4abvnsQJ2\nYY+fzQxGtUOHM/g0gckG0sjJVTiE3Sek1MNqlQnQC3tzpT0fQnv0Xw2Nnk2tZZjB\nw1ypY+EM2f7NEON/GKnHq7JhPWUli9DNvK3xcCvTcwKBgA9EetGCg0ejE6A9talG\nkZzw9RJF5RppmGyKFAoALE1IXGURI82uAGXQPjUOUfVfd9DuIzvOMV6cs9o/06lp\nOQunE3QoUMZM1urPN3NlodXUeP6YBTCD8Kkou2ia46o2H89YgXc5LF02sBRBjueA\n62IR2k9VwhS5blLD6xjqFd8G\n-----END PRIVATE KEY-----\n"

// const privateKey = fs.readFileSync("pvtk1", "utf8");

const  ciphertext = "OjzRv1K3GzDeAOGcrSpt2DdJMUt5SN5+vkqLRn8ymyru5GKhJzDFIHbX8AJv27y3EeK1CArprjB62+gqB7a8Y5xJZDlObs7MedpGgjix9DNfuRIrY1FsKeqlWapIRwcDqdcZgAeZ0PU1wgieM+vIkldahbASEvLUjlIlvOWhZMMGDhLLnkwM00tM+PgAup3gSe+WF6wvgCKmvhG+dNgvehEUuz87JMmDXKGFrIcNFv+9/O71+Enz9Tlly940YLPblj53hGExfUMJSo3BZaY3O2aHb1fFwhQ0lyWwl3XL66W4fXYSjyJsf6URWKVKmErL4DUeTAjr9suYtKpM2VcRHw=="

const decrypted = privateDecrypt(
    {
      key: privateKey,
      padding: constants.RSA_PKCS1_PADDING
    },
    Buffer.from(ciphertext, "base64")
  );

  const myText = decrypted.toString("utf8")

  console.log("decrypted : ", myText)


  const encryptedBuffer = publicEncrypt(
    {
        key: publicKey,
        padding: constants.RSA_PKCS1_PADDING
      },
    Buffer.from("Node public key encryption test12345")
  )

  const encrypted = encryptedBuffer.toString('base64')
  console.log("encrypted : ", encrypted)
  console.log("plain text : ", privateDecrypt(
    {
      key: privateKey,
      padding: constants.RSA_PKCS1_PADDING
    },
    Buffer.from(encrypted, "base64")
  ).toString("utf8"))
  //Sign
  const sign1 = sign(null, decrypted, privateKey)

  const signature = sign1.toString('base64')

  console.log("signature : ", signature)


  //Verify
  const isValid = verify(null, decrypted, publicKey, sign1)

  console.log("is valid : ", isValid)

  const isValid1 = verify(null, Buffer.from("hello 1234 from browser"), publicKey, sign1)

  console.log("is valid 1 : ", isValid1)