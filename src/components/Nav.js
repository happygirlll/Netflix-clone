import React, { useState, useEffect } from 'react';
import '../styles/Nav.css'
import { useNavigate } from 'react-router-dom';

export default function Nav() {
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState(false);
    const [searchInput, setSearchInput] = useState("");

    const navigate = useNavigate(); // 페이지 이동을 위한 hook

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShow(true);
            } else {
                setShow(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleSearch = () => {
        setSearch(!search);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault(); // 기본 폼 동작 방지
        if (searchInput.trim()) {
            navigate(`/search?q=${searchInput}`); // 쿼리 매개변수 전달
        }
    };

    return (
        <nav className={`nav ${show && 'nav-black'}`}>
            <img 
                className='nav-logo'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/400px-Netflix_2015_logo.svg.png"
                alt="netflix-logo"
            />

            <div className="nav-menu">
                <a href='http://localhost:3000/'>홈</a>
                <a href='http://localhost:3000/'>시리즈</a>
                <a href='http://localhost:3000/'>영화</a>
                <a href='http://localhost:3000/'>NEW! 요즘 대세 콘텐츠</a>
                <a href='http://localhost:3000/'>내가 찜한 리스트</a>
                <a href='http://localhost:3000/'>언어별로 찾아보기</a>
            </div>

            {search && ( // input 창 표시
                    <form onSubmit={handleSearchSubmit}>
                    <input 
                        type="text" 
                        className="search-input" 
                        placeholder="검색어를 입력하세요..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)} // 입력값 상태 업데이트
                    />
                    </form>
                )}
            <img
                className='nav-search'
                src={process.env.PUBLIC_URL + '/search.png'}
                alt="search-icon"
                onClick={toggleSearch}
            />
            <img
                className='nav-alarm'
                src={process.env.PUBLIC_URL + '/alarm.png'}
                alt="alarm-icon"
            />
            <img
                className='nav-avatar'
                src={process.env.PUBLIC_URL + '/Netflix-avatar.png'}
                alt="netflix-avatar"
            />
        </nav>
)
}
