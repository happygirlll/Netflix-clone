import React from 'react';
import "./MovieModal.css";

function MovieModal({
    backdrop_path,//영화 배경이미지
    title,//영화 제목
    overview,//영화 설명
    name,//프로그램 이름
    release_date,//영화 출시일
    first_air_date,//tv 프로그램 방영 시작일
    vote_average,//영화 평점
    setModalOpen//모달 닫기 상태를 변경하는 함수
}) {
    return (
        <div className="presentation" role="presentation">
            <div className="wrapper-modal">
                <div className="modal">
                    <span
                        onClick={() => setModalOpen(false)}
                        className="modal-close"
                    >
                        X
                    </span>
                    <img
                        className="modal__poster-img"
                        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        alt="modal__poster-img"
                    />
                    <div className="modal__content">
                        <p className="modal__details">
                            <span className="modal__user-perc">
                                100% for you
                            </span>{" "}
                            {release_date ? release_date : first_air_date}
                        </p>
                        <h2 className="modal__title">
                            {title ? title : name}
                        </h2>
                        <p className="modal__overview">평점: {vote_average}</p>
                        <p className="modal__overview">{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default MovieModal;