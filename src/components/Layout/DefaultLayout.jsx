import React from 'react';
import {Button, Flex, Layout} from 'antd';
import 'antd/dist/reset.css'
import '../../App.css'
const { Header, Footer, Content } = Layout;

const headerStyle=  {
    textAlign: 'center',
    color: '#fff',
    height: '64',
    paddingInline: '48',
    lineHeight : '64',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    zIndex: 1000,
    backgroundColor: 'rgba(145, 145, 145, 0.5)',
    backdropFilter: 'blur(10px)'
}
const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    background: 'linear-gradient(to bottom, #2F363A, white)',
    paddingTop: '80px',
    paddingRight: '80px',
    paddingLeft: '80px',
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
const DefaultLayout = ({children }) => (
    <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <div className="LogoText">
                    <div className="cone">
                        <img src="/src/images/cone.png" alt="cone"/>
                    </div>
                    <div>
                        <h3 className="logoTextStyle">AniWiki</h3>
                    </div>
                </div>

                <div className="LoginButton">
                    <Button color="default" variant="filled" className="whiteTextButton">
                        Login
                    </Button>
                </div>
            </Header>
            <Content style={contentStyle}>
                {children}
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Flex>
);
export default DefaultLayout;