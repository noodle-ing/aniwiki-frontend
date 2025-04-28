import React from 'react';
import { Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Search } = Input;
const searchStyle = {
    width: '100%',
    marginTop: '10%',
};

const App = () => {
    const navigate = useNavigate();

    const onSearch = (value) => {
        if (!value) return;

        // Навигация на другую страницу с параметром поиска в URL
        navigate(`/search?query=${encodeURIComponent(value)}`);
    };

    return (
        <Space style={searchStyle} direction="vertical">
            <Search
                placeholder="find anime 💫"
                onSearch={onSearch}
                style={{ width: 300, height: 200 }}
            />
        </Space>
    );
};

export default App;
