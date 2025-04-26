import React, { useRef, useState } from 'react';
import Popover from "./popover.jsx";
import {Button} from "antd";

const CardArray = () => {
    const [visible, setVisible] = useState(false);
    const scrollContainerRef = useRef(null);

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const cardItems = Array.from({ length: 10 }, (_, index) => index + 1);


    return (
        <div style={{ position: 'relative', width: '100%', padding: '40px 0' }}>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
                zIndex: 2
            }}>
           </div>

            <div
                ref={scrollContainerRef}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '60px',
                    overflowX: 'auto',
                    scrollBehavior: 'smooth',
                    padding: '10px 40px',
                    scrollbarWidth: 'none' // hides scrollbar in Firefox
                }}
            >
                {cardItems.map((index) => (
                    <Popover
                        key={index}
                        index={index}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        visible={visible}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardArray;
