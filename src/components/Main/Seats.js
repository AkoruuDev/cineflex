import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function saveRequest({ seats }) {
    const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', seats);
    promise.then(res => console.log(res.data));

    return(
        console.log("PRONTINHO")
    )
}

let idDaSess = 1;

function Seat({ number }) {
    return(
        <span className="seats-choice">{number}</span>
    )
}

function Seats({ id }) {
    const [seats, setSeats] = useState([]);

    const { sessionID } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionID}/seats`);
        promise.then(res => {
            setSeats(res.data.seats)
        });
    }, [])
    
    return (
        <div className="seats">
            <h2 className="page-title">Selecione o(s) assento(s)</h2>
            <div className="seats-content">
            {seats.map((seat, index) => (
                <Seat key={index} number={seat.name} />
            ))}
            </div>
            <div className="ending">
                <h3>Nome do comprador:</h3>
                <input type="text" name="buyer-name" placeholder="Digite seu nome..." className="input-text" />
                <h3>CPF do comprador:</h3>
                <input type="text" name="buyer-cpf" placeholder="Digite seu CPF..." className="input-text" />
            </div>
            <div className="button">Reservar assento(s)</div>
        </div>
    )
}

export default Seats;