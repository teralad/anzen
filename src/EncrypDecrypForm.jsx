import { Button, Input, Form, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const EncrypDecrypForm = (props) => {

  const { TextArea } = Input;

  const normFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  return (
    <>
      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[
          {
            required: true,
            message: "Please input your file!",
          },
        ]}
      >
        <Upload
          name="logo"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          beforeUpload={(file) => {
            var reader = new FileReader();

            if (props.page === "en") {
              reader.onload = function (e) {
                //   var data = e.target.result;
                console.log(reader.result);
                props.setReadedFile(reader.result);
              };

              reader.onerror = function (ex) {
                console.log(ex);
              };

              reader.readAsDataURL(file);
            } else if (props.page === "de") {
              reader.onload = function (e) {
                //   var data = e.target.result;
                console.log(e.target.result);
                props.setReadedFile(e.target.result);
              };

              reader.onerror = function (ex) {
                console.log(ex);
              };

              reader.readAsText(file);
            }

            // Prevent upload
            return false;
          }}
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        label="Publickey"
        name="publicKeyInput"
        rules={[
          {
            required: props.page==="en"?true:false,
            message: "Please input",
          },
        ]}
      >
        <TextArea rows={6} cols={100} value={props.PubKey} />
      </Form.Item>

      <Form.Item
        label="Privatekey"
        name="privateKeyInput"
        rules={[
          {
            required: props.page==="de"?true:false,
            message: "Please input",
          },
        ]}
      >
        <TextArea rows={6} cols={100} value={props.priKey} />
      </Form.Item>
    </>
  );
};

export default EncrypDecrypForm;
