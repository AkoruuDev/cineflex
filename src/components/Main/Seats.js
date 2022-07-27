import axios from "axios";
import Get from "../common/Get";

function Seats({ type, id }) {
    const promise = <Get page = {type} id = {id} />
    return (
        <div className="seats">
            <h2 className="page-title">Selecione o(s) assento(s)</h2>
            {`Lista de assentos aqui`}
            <h3>Nome do comprador:</h3>
            <input type="text" name="buyer-name" placeholder="Digite seu nome..." className="input-text" />
            <h3>CPF do comprador:</h3>
            <input type="text" name="buyer-cpf" placeholder="Digite seu CPF..." className="input-text" />
            <div className="button">Reservar assento(s)</div>
        </div>
    )
}

export default Seats;