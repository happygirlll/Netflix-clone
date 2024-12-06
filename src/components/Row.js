import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function Row({title, fetchUrl}) {

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetchMoviesData();
    }, [fetchUrl]);

    const fetchMoviesData = async () => {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
        return response;
    };

    return (
        <div>Row</div>
    )
}
