import React, { useState } from 'react';
import Card from "./card.jsx";

const { Meta } = Card;

const App = () => {
    // Состояние для контроля видимости всплывающего окна
    const [visible, setVisible] = useState(false);

    // Стили для плавного появления всплывающего окна
    const popupStyle = {
        width: 200,
        height: 250,
        backgroundColor: '#fff',
        color: 'black',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '100%',
        transform: 'translateY(-50px) translateX(-100px)',
        opacity: visible ? 1 : 0,  // Плавное изменение видимости
        pointerEvents: 'none',  // Чтобы не мешать наведению на основную карточку
        transition: 'opacity 0.3s ease',  // Плавное изменение opacity
        zIndex: 10
    };

    // Стили для основной карточки

    return (
        <div
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setVisible(true)}  // Активируем появление при наведении
            onMouseLeave={() => setVisible(false)} // Делаем всплывающее окно невидимым при убирании курсора
        >
            {/* Всплывающее окно */}
            <div style={popupStyle}>
                Info Box
            </div>

            {/* Основная карточка */}
            <Card/>
        </div>
    );
};

export default App;
