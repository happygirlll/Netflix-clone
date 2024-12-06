import React, { useEffect, useState } from 'react';
import '../styles/Banner.css'
import requests from '../api/requests';
import axios from '../api/axios';


const Banner = () => {
    //useState 사용 : movie 상태 생성, 빈 배열 설정 | setMovie로 movie 상태 업데이트
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);

    //컴포넌트가 처음 렌더링될 때 의존성 배열 '[]'로 인해 fetchData() 함수가 한번만 호출
    useEffect(() => {
        fetchData();
    }, []);

    //fetchData() 함수 호출 : movieId를 받아서 movie detail 정보 받아오기
    const fetchData = async () => {
        //상영중인 영화 정보 가져오기
        /* await axios.get은 비동기 http get 요청 보내고 그 결과 기다리는 역할
            Axios 라이브러리와 async/await 기능 활용 */
        try {
            setLoading(true);
            const request = await axios.get(requests.fetchNowPlaying);
            console.log("현재 재생 되는지", request.data);
            const randomMovie =
            request.data.results[
                //floor() : 정수로 변환
                Math.floor(Math.random() * request.data.results.length)
            ]?.id;

            if (randomMovie?.id) {
            const { data: movieDatail } = await axios.get(`movie/${randomMovie.id}`,
                {
                    params: { append_to_response: 'videos' },
                });
            setMovie(movieDatail);
            }
        } catch (error) {
            console.error("에러 무비 데이터", error);
        }
        finally {
            setLoading(false); // 로딩 종료
        }
    };

    return (
        <section className="main-banner"
            style={{
                backgroundImage: movie?.backdrop_path
                    ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
                    : `url("/default-banner-image.jpg")`,backgroundSize: 'cover',
                backgroundPosition: 'Top center',
            }}
        >
            {loading ? (
                <div className="loader">로딩 중...</div>
            ) : (
            <div className="banner-content">
                <h1 className='banner-titile'>{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="buttons">
                    <button className="banner-play-btn">재생</button>
                    <button className="banner-detail-btn">상세 정보</button>
                </div>
            </div>
            )}
        </section>
    );
};

export default Banner
