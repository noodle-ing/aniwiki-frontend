import React, { useMemo, useState } from 'react';
import { Button, ConfigProvider, Flex, Popover, Segmented } from 'antd';

const App = () => {
    const [arrow, setArrow] = useState('Show');

    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
            return false; // убираем стрелку
        }
        if (arrow === 'Show') {
            return false; // обычная стрелка
        }
        return {
            pointAtCenter: true, // по центру стрелка
        };
    }, [arrow]);

    const content = (
        <div style={{
            width: 120,
            height: 80,
            backgroundColor: '#4096ff',
            color: '#fff',
            borderRadius: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            Info Box
        </div>
    );

    return (
        <ConfigProvider>
            <Flex
                justify="center"
                align="center"
                style={{ height: '100vh', width: '100vw' }}
            >
                <Flex vertical align="center" gap={20}>
                    <Segmented
                        options={['Show', 'Hide', 'Center']}
                        onChange={setArrow}
                        style={{ marginBottom: 24 }}
                    />
                    <Popover
                        content={content}
                        placement="right"
                        arrow={mergedArrow}
                        trigger="hover"
                        overlayInnerStyle={{ marginTop: '20px' }} // ← смещение вниз
                    >
                        <Button type="primary">Hover me</Button>
                    </Popover>
                </Flex>
            </Flex>
        </ConfigProvider>
    );
};

export default App;
