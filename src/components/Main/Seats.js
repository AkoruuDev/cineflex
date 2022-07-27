import axios from "axios";

function saveRequest({ seats }) {
    const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', seats);
    promise.then(res => console.log(res.data));

    return(
        console.log("PRONTINHO")
    )
}

function Seats({ id }) {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`);
    promise.then(res => console.log(res.data));
    
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