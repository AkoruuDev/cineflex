import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MovieTemplate({ folder, selectMovie, movieID }) {
    return (
        <Link to={`/filme/${movieID}`}>
            <div className="folder">
                <img src={folder} alt="folder-img" />
            </div>
        </Link>
    )
}

function Movies({ reload, order }) {
    reload(order);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then(res => {
            setMovies(res.data);
        });
    }, []);

    return (
        <div className="movies">
            <h2 className="page-title">Selecione o filme</h2>
            <div className="list-movies">
                {movies.map(movie => (
                    <MovieTemplate key={movie.id} folder={movie.posterURL} movieID={movie.id} />
                ))}
            </div>
        </div>
    )
}

export default Movies;