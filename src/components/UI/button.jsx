import React from 'react';
import { Button, ConfigProvider, Flex } from 'antd';
import { useResponsive } from 'antd-style';
const App = () => {
    const { xxl } = useResponsive();
    return (
        <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
            <Flex vertical gap="small">
                <Flex gap="small" wrap>
                    <Button color="default" variant="filled">
                        Filled
                    </Button>
                </Flex>
            </Flex>
        </ConfigProvider>
    );
};
export default App;