import React, { useState, useEffect } from 'react';
import { Button, Layout } from 'antd';
import 'antd/dist/reset.css';
import Search from "./components/UI/search.jsx";
import './App.css';

const { Header, Footer, Content } = Layout;

const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: '64',
    paddingInline: '48',
    lineHeight: '64',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 0,
    left: 0,
    right: 0,
    position: 'fixed',
    zIndex: 1000,
    backgroundColor: 'rgba(145, 145, 145, 0.5)',
    backdropFilter: 'blur(10px)',
};

const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    background: 'linear-gradient(to bottom, #2F363A, white)',
};



const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    minHeight: '100vh',
};

const App = () => {
    const [animeData, setAnimeData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnimeData = async () => {
            try {
                const response = await fetch('http://localhost:5042/Anime/top10');
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const data = await response.json();
                console.log(data);
                setAnimeData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchAnimeData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <div className="LogoText">
                    <div className="cone">
                        <img src="/src/images/cone.png" alt="cone" />
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
                <div className="mainPageImages">
                    <div className="mainPageAnimeGirl">
                        <img src="/src/images/IMG_2873.PNG" alt="#" />
                    </div>
                    <div className="textimages">
                        <div className="whiteText">
                            <div className="firstFrame">
                                <img src="/src/images/Fraim0.jpg" alt="#" />
                            </div>
                            <div className="secondFrame">
                                <img src="/src/images/Fraim1.jpg" alt="#" />
                            </div>
                        </div>
                        <div>
                            <img src="/src/images/Fraim2.jpg" alt="#" />
                        </div>
                        <div>
                            <Search />
                        </div>
                    </div>
                </div>
            </Content>
        </Layout>
    );
};

export default App;
