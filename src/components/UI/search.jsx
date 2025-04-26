import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const searchStyle={
    width:"100%",
    marginTop: "10%"
}
const onSearch = (value, _e, info) =>
    console.log(info === null || info === void 0 ? void 0 : info.source, value);
const App = () => (
    <Space style={searchStyle} direction="vertical">
        <Search placeholder="find anime 💫" onSearch={onSearch} style={{ width: 300 , height: 200}} />
    </Space>
);
export default App;