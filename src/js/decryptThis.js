import * as openpgp from "openpgp";
import { save } from "./save";
import { message } from "antd";

export const decryptThis = async (
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
    console.log(readedFile);
    const message = await openpgp.readMessage({
      armoredMessage: readedFile, // parse armored message
    });
    const { data: decrypted, signatures } = await openpgp.decrypt({
      message,
      verificationKeys: publicKeyIN, // optional
      decryptionKeys: privateKeyIN,
    });
    save("decrypted", decrypted);
  } catch {
    message.error("Please Enter Valid Input");
  }
};
