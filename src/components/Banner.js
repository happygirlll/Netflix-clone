import React, {useEffect, useState} from 'react';
import '../styles/Banner.css'
import requests from '../api/requests';
import axios from 'axios';


const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        //상영중인 영화 정보 가져오기
        const request = await axios.get(requests.fetchNowPlaying);
        const movieId = request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ].id;

        const {data: movieDatail} = await axios.get(`movie/${movieId}`,
            {params: {append_to_response: 'videos'},
        });
        setMovie(movieDatail);
    };
    
return (
        <section className="main-banner"
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'Top center',
                }}
        >
        <div className="banner-content">
            <h1>글래디에이터</h1>
            <p>오늘 영화 순위 6위</p>
            <p>로마 황제가 세상을 떠난 후 왕위 계승자로 지목된 장군은 권력에 굶주린 황제의 아들에 의해 살해될 위기에 처하는데...</p>
            <div className="buttons">
                <button className="banner-play-btn">재생</button>
                <button className="banner-detail-btn">상세 정보</button>
            </div>
        </div>
    </section>
    )
}

export default Banner
