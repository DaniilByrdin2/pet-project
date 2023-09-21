import React from 'react';
import { Button, Space } from 'antd';

const ButtonDashed= ( { fn, text } ) => (
  <Space wrap>
    <Button type="dashed" onClick={fn} >{ text }</Button>
  </Space>
);

const ButtonPrimary  = ( { fn, text } ) => (
  <Space wrap>
    <Button type="primary" onClick={fn}>{ text }</Button>
  </Space>
);


export { ButtonPrimary, ButtonDashed }