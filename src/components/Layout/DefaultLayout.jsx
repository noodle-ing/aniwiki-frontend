import React from 'react';
import { Button, Flex, Layout } from 'antd';
import 'antd/dist/reset.css';
import '../../App.css';
import { useNavigate } from "react-router-dom";

const { Header, Footer, Content } = Layout;

const DefaultLayout = ({ children }) => {
    const navigate = useNavigate();

    const handleClick = () => navigate("/");

    const headerStyle = {
        textAlign: 'center',
        color: '#fff',
        height: '64px', // нужно px, иначе будет ошибка
        paddingInline: '48px',
        lineHeight: '64px',
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
    };

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

    const layoutStyle = {
        borderRadius: 8,
        overflow: 'hidden',
        width: '100%',
        minHeight: '100vh'
    };

    return (
        <Flex gap="middle" wrap>
            <Layout style={layoutStyle}>
                <Header style={headerStyle}>
                    <div className="LogoText" onClick={handleClick} style={{ cursor: 'pointer' }}>
                        <div className="cone">
                            <img src="/images/cone.png" alt="cone" />
                        </div>
                        <div>
                            <h3 className="logoTextStyle">AniWiki</h3>
                        </div>
                    </div>

                    <div className="LoginButton">
                        <Button type="primary" className="whiteTextButton">
                            Login
                        </Button>
                    </div>
                </Header>
                <Content style={contentStyle}>
                    {children}
                </Content>
            </Layout>
        </Flex>
    );
};

export default DefaultLayout;
