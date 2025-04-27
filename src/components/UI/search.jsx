import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
const { Search } = Input;
const searchStyle={
    width:"100%",
    marginTop: "10%"
}
const onSearch = (value) => {
    if (!value) return;

    fetch(`http://localhost:5042/anime/search?query=${encodeURIComponent(value)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Полученные данные:', data);
            // Тут можешь потом вывести их на страницу
        })
        .catch(error => {
            console.error('Ошибка запроса:', error);
        });
};


const App = () => (
    <Space style={searchStyle} direction="vertical">
        <Search placeholder="find anime 💫" onSearch={onSearch} style={{ width: 300 , height: 200}} />
    </Space>
);
export default App;