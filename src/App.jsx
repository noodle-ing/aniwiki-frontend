import React from 'react';
import {Button, Flex, Layout} from 'antd';
import 'antd/dist/reset.css'
import Carousel from "./components/UI/carousel.jsx";
import Card from "./components/UI/popover.jsx";
import Popover from "./components/UI/popover.jsx";
import Cardarray from "./components/UI/cardarray.jsx";
import './App.css'
import Search from "./components/UI/search.jsx";
import Animepreviewline from "./components/UI/animepreviewline.jsx";
import Animepreviewcolume from "./components/UI/animepreviewcolume.jsx";
const { Header, Footer, Sider, Content } = Layout;

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
    background: 'linear-gradient(to bottom, #2F363A, white)'
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
               <div className="mainPageImages">
                   <div className="mainPageAnimeGirl">
                       <img src="/src/images/IMG_2873.PNG" alt="#"/>
                   </div>
                   <div className="textimages">
                       <div className="whiteText">
                           <div className="firstFrame">
                               <img src="/src/images/Fraim0.jpg" alt="#"/>
                           </div>
                           <div className="secondFrame">
                               <img src="/src/images/Fraim1.jpg" alt="#"/>
                           </div>
                       </div>
                       <div>
                       <img src="/src/images/Fraim2.jpg" alt="#"/>
                       </div>
                       <div>
                           <Search></Search>
                       </div>
                   </div>
               </div>
                <div>
                    <h1 className="TopTitle">Top 10 Titles</h1>
                </div>

                <Cardarray/>

                <div className="animecolume">
                    <div className="topAnime">
                        <div className="topic">
                            Top Anime
                        </div>
                        <div className="topic">
                            <Animepreviewcolume/>
                        </div>
                    </div>
                    <div className="topAnime">
                        <div className="topic">
                            Top Anime
                        </div>
                        <div className="topic">
                            <Animepreviewcolume/>
                        </div>
                    </div>
                    <div className="topAnime">
                        <div className="topic">
                            Top Anime
                        </div>
                        <div className="topic">
                            <Animepreviewcolume/>
                        </div>
                    </div>
                </div>
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Flex>
);
export default App;