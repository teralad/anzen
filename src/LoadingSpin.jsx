import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingSpin = () => {
    const antIcon = <LoadingOutlined style={{ fontSize: 16, color:"white" }} spin />;
    return <Spin indicator={antIcon} />;
}
 
export default LoadingSpin;
