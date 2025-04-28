import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout.jsx';

const AnimeDetail = () => {
    const { id } = useParams();
    const [anime, setAnime] = useState(null);

    useEffect(() => {
        fetch(`http://134.209.249.191/api/Anime/anime/${id}`)
            .then(response => response.json())
            .then(data => {
                setAnime(data.data);
            })
            .catch(error => {
                console.error('Ошибка запроса:', error);
            });
    }, [id]);

    if (!anime) return <div className="text-center text-white text-xl mt-10">Loading...</div>;

    // Функция для отрисовки звезд
    const renderStars = (score) => {
        const rating = Math.round(score / 2);
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<span key={i} className="text-yellow-400 text-xl">★</span>);
            } else {
                stars.push(<span key={i} className="text-gray-400 text-xl">☆</span>);
            }
        }
        return stars;
    };

    return (
        <DefaultLayout>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-6">
                {/* Изображение аниме */}
                <div className="w-full md:w-5/12">
                    <img
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                        className="rounded-2xl shadow-2xl object-cover max-h-[600px] w-full"
                    />
                </div>

                {/* Блок с информацией */}
                <div className="w-full md:w-6/12">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl text-center space-y-6">
                        <h1 className="text-4xl font-extrabold text-white">{anime.title}</h1>
                        <p className="text-gray-300 text-md leading-relaxed">{anime.synopsis || "No description available."}</p>
                        <div className="flex flex-col items-center gap-4 text-gray-200 text-sm">
                            <div className="flex flex-col items-center">
                                <p className="font-semibold mb-1">Rating:</p>
                                <div className="flex items-center">
                                    {renderStars(anime.score)}
                                    <span className="ml-2 text-gray-300 text-base">{anime.score ?? 'N/A'} / 10</span>
                                </div>
                            </div>
                            <div>
                                <p><span className="font-semibold">Genres:</span> {anime.genres?.map(genre => genre.name).join(', ') || 'Unknown'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default AnimeDetail;
