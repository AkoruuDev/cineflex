import axios from "axios";

function Sessions({ id }) {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);
    promise.then(res => console.log(res.data));
    
    return (
        <div className="sessions">
            <h2 className="page-title">Selecione o horário</h2>
            {`Lista de horarios aqui`
                // <Post seats = {type} />
            }
        </div>
    )
}

export default Sessions;