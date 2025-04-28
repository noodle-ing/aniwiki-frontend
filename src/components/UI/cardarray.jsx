import React, { useState, useRef } from 'react';
import Popover from './popover.jsx';
import { Button } from 'antd';

const Cardarray = ({ animeData }) => {
    const [visible, setVisible] = useState(false);
    const scrollContainerRef = useRef(null);
    console.log("это то что прилетает в cardarray:", animeData);

    if (!animeData || !Array.isArray(animeData)) {
        return <div>Loading or No data available</div>;  // Можете вывести какое-то сообщение или элемент-заполнитель
    }

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    return (
        <div style={{ position: 'relative', width: '100%', padding: '40px 0' }}>
            <div
                ref={scrollContainerRef}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '60px',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    padding: '10px 40px',
                    scrollbarWidth: 'none',
                }}
            >
                {animeData.map((anime, index) => (
                    <Popover
                        key={anime.id}  // Используем уникальный идентификатор для ключа
                        anime={anime}  // Передаем объект
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        visible={visible}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cardarray;
