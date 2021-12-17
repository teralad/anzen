import * as openpgp from "openpgp";

export const generateKey = async (
  name,
  email,
  algorithm,
  keySize,
  passphrase,
  setPubKey,
  setpriKey,
  setKeyGenSpin
) => {
  setKeyGenSpin(true)
  const { privateKey, publicKey } = await openpgp.generateKey({
    type: algorithm, // Type of the key
    rsaBits: keySize, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: name, email: email }], // you can pass multiple user IDs
    passphrase: passphrase, // protects the private key
  });

  setpriKey(privateKey);
  setPubKey(publicKey);
  setKeyGenSpin(false)
};
