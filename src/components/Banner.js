import React, { useEffect, useState } from 'react';
import '../styles/Banner.css'
import requests from '../api/requests';
import axios from '../api/axios';
import styled from 'styled-components';

const Banner = () => {
    //useState 사용 : movie 상태 생성하고 업데이트
    const [movie, setMovie] = useState([]);

    //API 요청 중인지 상태를 저장. 데이터 로딩이 완료되면 false로 설정.
    const [loading, setLoading] = useState(true);

    //재생 버튼 시 비디오 전환
    const [isClicked, setIsClicked] = useState(false);

    //컴포넌트가 처음 렌더링될 때 의존성 배열 '[]'로 인해 fetchData() 함수가 한번만 호출
    useEffect(() => {
        fetchData();
    }, []);

    //fetchData() 함수 호출 : movieId를 받아서 movie detail 정보 받아오기
    const fetchData = async () => {

        //상영중인 영화 정보 가져오기
        
        try {
            setLoading(true);

            /* await axios.get은 비동기 http get 요청 보내고 그 결과 기다리는 역할 */
            const request = await axios.get(requests.fetchNowPlaying);
            //console.log("현재 재생 되는지", request.data);

            //유효한 영화만 필터링하기
            const validMovies = request.data.results.filter(
                movie => movie.backdrop_path
            );

            //랜덤 영화 선택
            const randomMovieId =
                validMovies[
                    //floor() : 정수로 변환
                    Math.floor(Math.random() * validMovies.length)
                ]?.id;

            if (randomMovieId) {
                const { data: movieDetail } = await axios.get(
                    `movie/${randomMovieId}`,
                    {
                        params: { append_to_response: 'videos' },
                    });
                setMovie(movieDetail);
            }
        } catch (error) {
            console.error("데이터를 불러오지 못합니다.", error);
        }
        finally {
            setLoading(false); // 로딩 종료
        }
    };

    //재생버튼 안 눌렀을시
    if (!isClicked) {
        return (
            <section className="main-banner"
                style={{
                    backgroundImage: movie?.backdrop_path
                        ? `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
                        : `url("/default-banner-image.jpg")`, backgroundSize: 'cover',
                    backgroundPosition: 'Top center',
                }}
            >
                {loading ? (
                    <div className="loader">로딩 중...</div>
                ) : (
                    <div className="banner-content">
                        <h1 className='banner-titile'>{movie?.title || movie?.name || movie?.original_name}</h1>
                        <div className="buttons">
                            <button className="banner-play-btn"
                                onClick={() => setIsClicked(true)}>재생</button>
                            <button className="banner-detail-btn">상세 정보</button>
                        </div>
                        <h2 className="banner-description">{movie.overview}</h2>
                    </div>
                )}
            </section>
        );
    } else {
        // Iframe 영상 재생
        return (
            <Container>
                <HomeContainer>
                    <Iframe
                        src={`https://www.youtube.com/embed/${movie.videos.results[0]?.key}
                        ?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0]?.key}`}
                        width="640"
                        height="360"
                        framborder="0"
                        allow="autoplay; fullscreen">
                    </Iframe>
                </HomeContainer>
            </Container>
        )
    }
};

export default Banner;

// styled-components로 Banner 컴포넌트를 스타일링
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    flex-direction: column;`;

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;`;

const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: 1;
    border: none;
    opacity: 0.65;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;    
    }
`;