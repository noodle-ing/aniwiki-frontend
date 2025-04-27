import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout.jsx';
import { Card } from 'antd';
import Search from "./UI/search.jsx";
import Animepreviewcolume from "./UI/animepreviewcolume.jsx";


// const cardStyle ={
//     backgroundColor: 'rgba(0, 0,0, 0.8)',
//
// }
const AnimeDetail = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

    useEffect(() => {
        // Загружаем данные для конкретного аниме по ID
        fetch(`http://localhost:5042/Anime/anime/${id}`)
            .then(response => response.json())
            .then(data => {
                setAnime(data.data);
            })
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }, [id]);

    if (!anime) return <div className="text-white">Загрузка...</div>;

    return (
        <DefaultLayout>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                {/* Изображение аниме */}
                <div className="w-full md:w-1/2">
                    <img src={anime.images.jpg.image_url} alt={anime.title} className="rounded-lg shadow-lg" />
                </div>

                {/* Контейнер с блюром и текстами */}
                <div  className="w-full md:w-1/2 flex flex-col gap-4 items-center">
                    <div
                        className="  p-8 rounded-lg shadow-lg w-full"
                        style={{ maxWidth: '600px', backgroundColor: 'rgba(135,135,135, 0.1)' }}
                    >
                        <h1 className="text-3xl font-bold text-white">{anime.title}</h1>
                        <p className="text-gray-300 text-lg mt-4">{anime.synopsis}</p>
                        <div className="text-white mt-4">
                            <p>Rating: {anime.score} / 10</p>
                            <p>Genres: {anime.genres.map(genre => genre.name).join(', ')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default AnimeDetail;
