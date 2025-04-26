import React, { useState } from 'react';
import Card from "./card.jsx";

const { Meta } = Card;

const App = () => {
    // Состояние для контроля видимости всплывающего окна
    const [visible, setVisible] = useState(false);

    // Стили для плавного появления всплывающего окна
    const popupStyle = {
        width: 200,
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // светлая полупрозрачность
        backdropFilter: 'blur(10px)',
        color: 'black',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '100%',
        transform: 'translateY(-50px) translateX(-100px)',
        opacity: visible ? 1 : 0,
        pointerEvents: 'none',
        transition: 'opacity 0.3s ease',
        zIndex: 10,
        padding: 16,
    };

    return (
        <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <div style={popupStyle}>
                Info Box
            </div>
            <Card/>
        </div>
    );
};

export default App;
