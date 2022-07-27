import { useEffect, useState } from "react";
import axios from "axios";

function MovieTemplate({ folder }) {
    return (
        <div className="folder">
            <img src={folder} alt="folder-img" />
        </div>
    )
}

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(res => {
            setMovies(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="movies">
            <h2 className="page-title">Selecione o filme</h2>
            {movies.map(movie => (
                <MovieTemplate folder={movie.posterURL} />
            ))}
        </div>
    )
}

export default Movies;