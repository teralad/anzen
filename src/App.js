import { useState } from "react";
import { Button, Input, Form } from "antd";
import "antd/dist/antd.css";
import "./App.css";
import MainMenu from "./MainMenu";
import { generateKey } from "./js/generateKey";
import { encryptThis } from "./js/encryptThis";
import { decryptThis } from "./js/decryptThis";
import KeyGenForm from "./KeyGenForm";
import EncrypDecrypForm from "./EncrypDecrypForm";
import KeyContainers from "./KeyContainers";
import LoadingSpin from "./LoadingSpin";

function App() {
  const [page, setPages] = useState("home");
  const [pubKey, setPubKey] = useState();
  const [priKey, setpriKey] = useState();
  const [readedFile, setReadedFile] = useState();
  const [keyGenSpin, setKeyGenSpin] = useState();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);

    if (page === "home")
      generateKey(
        values.name,
        values.user.email,
        values.algorithm,
        values.keySize,
        values.passphrase,
        setPubKey,
        setpriKey,
        setKeyGenSpin
      );
    else if (page === "en")
      encryptThis(
        values.publicKeyInput,
        values.privateKeyInput,
        values.messageInput,
        values.passphrase,
        readedFile
      );
    else if (page === "de")
      decryptThis(
        values.publicKeyInput,
        values.privateKeyInput,
        values.messageInput,
        values.passphrase,
        readedFile
      );

    console.log(values);

    // form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //https://www.npmjs.com/package/openpgp?activeTab=readme#generate-new-key-pair

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <h1 className="title">PGP ENCRYPTION</h1>
        <div>
          <MainMenu page={page} setPages={setPages} form={form} />
        </div>
      </div>
      <div className="main-container">
        <div className="sub-container" style={{ width: "520px" }}>
          <Form
            name="basic"
            labelCol={{
              span: 7,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            {page === "home" && <KeyGenForm />}
            <Form.Item
              label="Passphrase"
              name="passphrase"
              rules={[
                {
                  required: true,
                  message: "Please input your passphrase!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            {page !== "home" && (
              <EncrypDecrypForm
                priKey={priKey}
                PubKey={pubKey}
                setReadedFile={setReadedFile}
                page={page}
              />
            )}
            <Form.Item
              wrapperCol={{
                offset: 10,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                {page === "home" && (
                  <>
                    Generate Key
                    {keyGenSpin && (
                      <>
                        &nbsp;&nbsp;
                        <LoadingSpin  />
                      </>
                    )}
                  </>
                )}
                {page === "en" && <>Dowload Encrypted File</>}
                {page === "de" && <>Download Decrypted File</>}
              </Button>
            </Form.Item>
          </Form>
        </div>
        {page === "home" && <KeyContainers PubKey={pubKey} priKey={priKey} />}
      </div>
    </div>
  );
}

export default App;
