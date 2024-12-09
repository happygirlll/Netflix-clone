import React, { useEffect, useState } from 'react'
import { useLocation } from'react-router-dom';
import axios from '../../api/axios';

export default function SearchPage() {

  const [searchResults, setSearchResults] = useState([]);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  // search페이지에서 search term 받아오기
  let query = useQuery();
  const searchTerm = query.get('q');

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
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
          if(movie.backdrop_path != null && movie.media_type === "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.profile_path;
            return (
              <div className="movie" key={movie.id}>
                <div className="movie-column-poster">
                  <img src={movieImageUrl} alt="" className="movie_poster"/>
                </div>
              </div>
            );
        }
        
      })}
        </section>
        /* SearchTerm에 해당 영화 데이터가 없을 경우 */
    ) : <section className='no-results'>
      <p>Try different keywords!</p>
    </section>
  }
  return (
    <div>{renderSearchResults()}</div>
  )
}
