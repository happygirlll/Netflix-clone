import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from'react-router-dom';
import axios from '../../api/axios';
import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  // search페이지에서 search term 받아오기
  let query = useQuery();
  const searchTerm = query.get('q');
  const debouncedSearchTerm = useDebounce(query.get("q"), 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      console.log(request.data.results); // API 응답 확인
      setSearchResults(request.data.results);

    }
    catch (error) {
      console.error(error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      /* SearchTerm에 해당 영화 데이터가 있을 경우 */
      <section className="search-container">
        {searchResults.map((movie) => {
                const movieImageUrl =
                    "https://image.tmdb.org/t/p/w500" + 
                    (movie.backdrop_path || movie.profile_path);
                
            return (
              <div className="movie" key={movie.id}>
                <div onClick={() => navigate(`/${movie.id}`) }className="movie_column-poster">
                  <img src={movieImageUrl} alt="" className="movie_poster"/>
                </div>
              </div>
            );
        
        
      })}
        </section>
        /* SearchTerm에 해당 영화 데이터가 없을 경우 */
    ) : <section className='no-results'>
      <p>찾고자하는 검색어 "{debouncedSearchTerm}"에 맞는 영화가 없습니다.</p>
    </section>
  }
  return (
    <div>{renderSearchResults()}</div>
  )
}
