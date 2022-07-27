import axios from "axios";
import Get from "../common/Get";

function Sessions({ type, id }) {
    const promise = <Get page = {type} id = {id} />
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