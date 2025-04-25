import React from 'react';
import { Flex, Layout } from 'antd';
import 'antd/dist/reset.css'

const { Header, Footer, Sider, Content } = Layout;

const headerStyle=  {
    textAlign: 'center',
    color: '#fff',
    height: '64',
    paddingInline: '48',
    lineHeight : '64',
    backgroundColor: '#4096ff'
}
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};
const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
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
            <Content style={contentStyle}>Content</Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Flex>
);
export default App;