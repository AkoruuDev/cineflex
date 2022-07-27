import axios from "axios";
import Get from "../common/Get";

function Movies({ type }) {
    const promise = <Get page = {type} />
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