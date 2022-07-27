import axios from "axios";

function Movies() {
    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    promise.then(res => console.log(res.data));

    return (
        <div className="movies">
            <h2 className="page-title">Selecione o filme</h2>
            {`Lista de Filmes aqui`
                // <Get page = {page} />
            }
        </div>
    )
}

export default Movies;