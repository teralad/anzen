import { Input, Select, Form } from "antd";
const { Option } = Select;

const KeyGenForm = () => {
  return (
    <>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>

      <Form.Item name={["user", "email"]} label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="algorithm"
        label="Algorithm"
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Select a option and change input text above"
          // onChange={this.onGenderChange}
          allowClear
        >
          <Option value="rsa">RSA</Option>
        </Select>
      </Form.Item>

      <Form.Item name="keySize" label="Key Size" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          // onChange={this.onGenderChange}
          allowClear
        >
          <Option value={4096}>4096 Bits</Option>
        </Select>
      </Form.Item>
    </>
  );
};

export default KeyGenForm;
