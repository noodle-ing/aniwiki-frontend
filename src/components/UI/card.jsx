import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const App = () => (

    <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://upload.wikimedia.org/wikipedia/en/6/69/Black_Clover%2C_volume_1.jpg" />}
    >
    </Card>
);
export default App;