import React, {useState, useEffect} from 'react'
import {useParams} from'react-router-dom';
import axios from '../../api/axios';
export default function DetailPage() {
  let {movieId} = useParams();
  const [movies, setMovies] = useState({});

  useEffect(() => {
    async function fetchData(){
      const request = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}`
      );
      setMovies(request.data);

    }
    fetchData();
  }, [movieId]);
  console.log(movieId); 
  
  if(!movies) return <div>...loading</div>;

  return (
    <section>
      <img
        className='modal_poster-img'
        src={`https://image.tmdb.org/t/p/original/${movies.backdrop_path}`}
        alt="modal__poster-img"
/>
    </section>
  );
}
