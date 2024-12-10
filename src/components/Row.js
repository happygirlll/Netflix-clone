import React, { useEffect, useState, useRef } from 'react';
import axios from '../api/axios';
import '../styles/Row.css';
import MovieModal from './MovieModal';

export default function Row({ title, fetchUrl, isLargeRow, id }) {

    //API에 가져온 영화 목록을 저장
    const [movies, setMovies] = useState([]);

    // 슬라이더 컨테이너를 참고. 좌우 스크롤 기능 구현
    const postersContainerRef = useRef(null);

    // 모달 열림/닫힘 상태 관리
    const [modalOpen, setModalOpen] = useState(false);

    // 모달에 표시할 현재 영화 데이터 저장
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

    //영화 포스터 또는 배경 이미지 가져옴
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

    //모달 열기
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
