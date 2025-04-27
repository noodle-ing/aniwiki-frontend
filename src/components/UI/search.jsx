import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import {useNavigate} from "react-router-dom";

const { Search } = Input;
const searchStyle={
    width:"100%",
    marginTop: "10%"
}

const App = () => {
    const navigate = useNavigate();

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
                // console.log(data.data[0].mal_id)

                if (Array.isArray(data.data) && data.data[0]?.mal_id) {
                    navigate(`/anime/${data.data[0].mal_id}`, { state: { id: data.data[0].mal_id } });
                } else {
                    console.warn('Ничего не найдено для поиска.');
                }
            })
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    };

    return (
        <Space style={searchStyle} direction="vertical">
            <Search
                placeholder="find anime 💫"
                onSearch={(value) => onSearch(value, navigate)}
                style={{ width: 300, height: 200 }}
            />
        </Space>
    );
};

export default App;