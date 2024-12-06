import React from 'react'
import '../styles/Banner.css'

const Banner = () => {
    return (
        <section className="main-banner">
        <div className="banner-content">
            <h1>글래디에이터</h1>
            <p>오늘 영화 순위 6위</p>
            <p>로마 황제가 세상을 떠난 후 왕위 계승자로 지목된 장군은 권력에 굶주린 황제의 아들에 의해 살해될 위기에 처하는데...</p>
            <div className="buttons">
                <button>재생</button>
                <button>상세 정보</button>
            </div>
        </div>
    </section>
    )
}

export default Banner
