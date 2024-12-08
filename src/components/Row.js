import React, { useEffect, useState, useRef } from 'react';
import axios from '../api/axios';
import '../styles/Row.css';
import MovieModal from './MovieModal';

export default function Row({ title, fetchUrl, isLargeRow, id }) {

    const [movies, setMovies] = useState([]);
    const postersContainerRef = useRef(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelection] = useState({});

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const { data } = await axios.get(fetchUrl);
                setMovies(data.results || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, [fetchUrl]);


    const getImageUrl = (movie) => {
        const BASE_URL = 'https://image.tmdb.org/t/p/original/';
        return `${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path
            }`;
    };

    const handleLeftClick = () => {
        const container = postersContainerRef.current;
        if (container) {
            container.scrollLeft -= container.offsetWidth;
        }
    };

    const handleRightClick = () => {
        const container = postersContainerRef.current;
        if (container) {
            container.scrollLeft += container.offsetWidth;
        }
    };

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelection(movie);
    };

    return (
        <section className="row">
            <h2 className="row-title">{title}</h2>

            <div className="slider-container">
                <button className="slider-arrow left-arrow"
                    onClick={handleLeftClick}>{"<"}</button>

                <div id={id} className="posters-container" ref={postersContainerRef}>
                    {movies.map((movie) => (
                        <img
                            key={movie.id}
                            className={`poster ${isLargeRow ? "large-poster" : ""}`}
                            src={getImageUrl(movie)}
                            alt={movie.name || movie.title || "Movie"}
                            loading="lazy"
                            onClick={() => handleClick(movie)}
                        />
                    ))}
                </div>

                <button className="slider-arrow right-arrow"
                    onClick={handleRightClick}>{">"}</button>
            </div>
            {
                modalOpen && (
                    <MovieModal
                        {...movieSelected}
                        setModalOpen={setModalOpen}
                    />
                )
            }

        </section>
    )
}
