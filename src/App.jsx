import React from 'react';
import { Flex, Layout } from 'antd';
import 'antd/dist/reset.css'
import Carousel from "./components/UI/carousel.jsx";
import Card from "./components/UI/popover.jsx";
import Popover from "./components/UI/popover.jsx";
import Cardarray from "./components/UI/cardarray.jsx";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle=  {
    textAlign: 'center',
    color: '#fff',
    height: '64',
    paddingInline: '48',
    lineHeight : '64',
    backgroundColor: '#2F363A'
}
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#2F363A',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#CDCCD4',
};
const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    minHeight: '100vh'
};
const App = () => (
    <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>
               <Carousel />
                <Cardarray/>
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Flex>
);
export default App;