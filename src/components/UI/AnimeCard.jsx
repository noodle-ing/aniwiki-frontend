// AnimeCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Навигация на страницу с детальной информацией
        navigate(`/anime/${anime.mal_id}`);
    };

    return (
        <div onClick={handleClick} className="transform hover:scale-105  bg-gray-800/40 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
            <img
                src={anime.images?.jpg?.image_url}
                alt={anime.title}
                className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
                <h2 className="text-xl font-semibold text-white mb-2">{anime.title}</h2>
                <p className="text-sm text-gray-300 line-clamp-3">{anime.synopsis || "No synopsis available."}</p>
            </div>
        </div>
    );
};

export default AnimeCard;
