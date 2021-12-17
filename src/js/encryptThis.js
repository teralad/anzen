import * as openpgp from "openpgp";
import { saveTxt } from "./saveTxt";
import { message } from "antd";

export const encryptThis = async (
  publicKeyArmored,
  privateKeyArmored,
  msg,
  passphrase,
  readedFile
) => {
  try {
    const publicKeyIN = await openpgp.readKey({ armoredKey: publicKeyArmored });

    const privateKeyIN = await openpgp.decryptKey({
      privateKey: await openpgp.readPrivateKey({
        armoredKey: privateKeyArmored,
      }),
      passphrase,
    });

    const encrypted = await openpgp.encrypt({
      message: await openpgp.createMessage({ text: readedFile }), // input as Message object
      encryptionKeys: publicKeyIN,
      signingKeys: privateKeyIN, // optional
    });
    console.log(encrypted);

    saveTxt("encrypted.txt", encrypted);
  } catch {
    message.error("Please Enter Valid Input");
  }
};
