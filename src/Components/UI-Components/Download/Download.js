import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';

import { useState } from 'react'


const DownloadPhoto = () => {
  const [size, setSize] = useState('small'); // default is 'middle'

  return (
    <>
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
    </>
  );
};
export default DownloadPhoto;
