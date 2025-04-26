import React from 'react';
import { Carousel } from 'antd';
import  '/src/index.css';

const contentStyle = {
    height: '600px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const backgroundImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    backgroundImage: `url('https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660535.jpg')`
};


const App = () => (


    <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        <div style={backgroundImageStyle}>
            <h3 className="cover"  style={{backgroundImage: `url('https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660535.jpg')`,  width: '100%',     height: '100%', objectFit: "cover"}}></h3>
        </div>
        <div>
            <h3 style={contentStyle}><img style={backgroundImageStyle} src="https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660492.jpg?semt=ais_hybrid&w=740" alt="#"/></h3>
        </div>
        <div>
            <h3 style={contentStyle}><img style={backgroundImageStyle} src="https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660532.jpg?semt=ais_hybrid&w=740" alt="#"/></h3>
        </div>
        <div>
            <h3 style={contentStyle}><img style={backgroundImageStyle} src="https://img.freepik.com/free-photo/anime-eyes-illustration_23-2151660476.jpg?semt=ais_hybrid&w=740" alt="#"/></h3>
        </div>
    </Carousel>
);
export default App;