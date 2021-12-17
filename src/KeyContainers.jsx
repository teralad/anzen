import {Input} from "antd";

const KeyContainers = (props) => {
  const { TextArea } = Input;

  return (
    <>
      <div className="sub-container">
        <h2 style={{ color: "#40A7FB" }}>PublicKey</h2>
        <TextArea rows={10} cols={45} value={props.PubKey} />
      </div>
      <div className="sub-container">
        <h2 style={{ color: "#40A7FB" }}>PrivateKey</h2>
        <TextArea rows={10} cols={45} value={props.priKey} />
      </div>
    </>
  );
};

export default KeyContainers;
