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
        <div onClick={handleClick} className="border rounded shadow p-4 cursor-pointer">
            <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-64 object-cover" />
            <h2 className="text-xl font-bold mt-2">{anime.title}</h2>
            <p className="text-gray-600">{anime.synopsis?.substring(0, 100)}...</p>
        </div>
    );
};

export default AnimeCard;
