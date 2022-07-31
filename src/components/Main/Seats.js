import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function saveRequest(order) {
    const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', order);
    promise.then(res => console.log(res.data));

    return(
        console.log("PRONTINHO")
    )
}

let response = {};
let order;

function getOrder() {
    order = {...order,
        movieName: response.movie.title,
        dateTime: response.day.date,
        time: response.name
    }

    console.log(order)
}

function Seat({ number }) {
    return(
        <span className="seats-choice">{number}</span>
    )
}

function Seats() {
    const [seats, setSeats] = useState([]);
    const [nameBuyer, setNameBuyer] = useState()
    const [cpfBuyer, setCPFBuyer] = useState()

    const { sessionID } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionID}/seats`);
        promise.then(res => {
            setSeats(res.data.seats)
            response = res.data
            console.log(response)
            getOrder();
        });
    }, [])

    function finishingOrder() {
        order = {...order,
            nameBuyer: nameBuyer,
            cpfBuyer: cpfBuyer
        }
    
        // saveRequest(order);
    
        console.log(order)
    }
    
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
                <input type="text" name="buyer-name" placeholder="Digite seu nome..." className="input-text" value={nameBuyer} onChange={e => setNameBuyer(e.target.value)} />
                <h3>CPF do comprador:</h3>
                <input type="text" name="buyer-cpf" placeholder="Apenas números..." className="input-text" value={cpfBuyer} onChange={e => setCPFBuyer(e.target.value)} />
            </div>
            <div className="button" onClick={finishingOrder}>Reservar assento(s)</div>
        </div>
    )
}

export default Seats;