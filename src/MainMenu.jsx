import { Menu } from 'antd';
import { FieldBinaryOutlined, HomeOutlined, FileOutlined } from '@ant-design/icons';

const MainMenu = (props) => {

    // const [current, setCurrent] = useState("home")
    const handleClick = e => {
        console.log('click ', e);
        // setCurrent(e.key)
        props.setPages(e.key)
        props.form.resetFields();
        
      };

    return ( 
        <Menu onClick={handleClick} selectedKeys={[props.page]} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
            </Menu.Item>
            <Menu.Item key="en" icon={<FieldBinaryOutlined />}>
                  Encryption
            </Menu.Item>
            <Menu.Item key="de" icon={<FileOutlined />}>
                Decryption
            </Menu.Item>
        </Menu>
     );
}
 
export default MainMenu;