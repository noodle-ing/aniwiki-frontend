import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AnimeCard from "./AnimeCard.jsx";
import DefaultLayout from "../Layout/DefaultLayout.jsx";

const AnimeSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [animeList, setAnimeList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(false);

    const location = useLocation();
    useEffect(() => {
        // Извлекаем query из URL
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get("query");
        console.log(query);
        if (query) {
            setSearchQuery(query);
            fetchAnime(query, 1);
        }
    }, [location.search]);

    const fetchAnime = async (query, page) => {
        try {
            const response = await axios.get(`http://localhost:5042/Anime/search`, {
                params: {
                    query: query,
                    page: page,
                },
            });

            setAnimeList(response.data.data);
            setHasNextPage(response.data.pagination.has_next_page);
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
        <DefaultLayout>
            <div className="p-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {animeList.map((anime) => (
                        <AnimeCard key={anime.mal_id} anime={anime} />
                    ))}
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="px-3 py-0.05 text-sm bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300 transition-all duration-200"
                    >
                        Previous
                    </button>

                    <span className="px-2 py-1 text-sm text-gray-600">{`Page ${currentPage}`}</span>

                    <button
                        onClick={handleNextPage}
                        disabled={!hasNextPage}
                        className="px-3 py-0.05 text-sm bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300 transition-all duration-200"
                    >
                        Next
                    </button>
                </div>

            </div>
        </DefaultLayout>

    );
};

export default AnimeSearch;
