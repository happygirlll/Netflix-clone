import React, { useState, useEffect } from 'react';
import '../styles/Nav.css'

export default function Nav() {
    const [show, setShow] = useState(false);

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


            <img
                className='nav-search'
                src={process.env.PUBLIC_URL + '/search.png'}
                alt="search-icon"
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
