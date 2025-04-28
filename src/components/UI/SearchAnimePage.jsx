import React, {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";

const AnimeSearch = () => {
    const [searchQuery, setSearchQuery] = useState(""); // строка поиска
    const [animeList, setAnimeList] = useState([]); // список аниме
    const [currentPage, setCurrentPage] = useState(1); // текущая страница
    const [hasNextPage, setHasNextPage] = useState(false); // есть ли следующая страница


    const location = useLocation();
    useEffect(() => {
        // Извлекаем query из URL
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get("query");
        console.log(query);
        if (query) {
            setSearchQuery(query); // Устанавливаем значение query в состояние
            fetchAnime(query, 1); // Делаем запрос с этим query
        }
    }, [location.search]); // Срабатывает, когда меняется URL

    const fetchAnime = async (query, page) => {
        try {
            const response = await axios.get(`http://localhost:5042/Anime/search`, {
                params: {
                    query: query,
                    page: page,
                },
            });

            setAnimeList(response.data.data); // список аниме
            setHasNextPage(response.data.pagination.has_next_page); // есть ли следующая страница
        } catch (error) {
            console.error("Error fetching anime:", error);
        }
    };


    const handleNextPage = () => {
        const nextPage = currentPage + 1;
        setCurrentPage(nextPage);
        fetchAnime(searchQuery, nextPage);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            const prevPage = currentPage - 1;
            setCurrentPage(prevPage);
            fetchAnime(searchQuery, prevPage);
        }
    };

    return (
        <div className="p-4">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {animeList.map((anime) => (
                    <div key={anime.mal_id} className="border rounded shadow p-4">
                        <img src={anime.images.jpg.image_url} alt={anime.title} className="w-full h-64 object-cover" />
                        <h2 className="text-xl font-bold mt-2">{anime.title}</h2>
                        <p className="text-gray-600">{anime.synopsis?.substring(0, 100)}...</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-4 space-x-4">
                <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="p-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Previous
                </button>

                <span className="p-2">Page {currentPage}</span>

                <button
                    onClick={handleNextPage}
                    disabled={!hasNextPage}
                    className="p-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default AnimeSearch;
