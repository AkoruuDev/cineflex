import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function saveRequest(order) {
    const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', order);
    promise.then(res => console.log(res.data));

    return(
        console.log("PRONTINHO")
    )
}

let response = {};
let select = false;
let selecting = {};

function Seats({
    order,
    setOrder,
    setSeatChoiced
}) {
    const [seats, setSeats] = useState([]);
    const [nameBuyer, setNameBuyer] = useState()
    const [cpfBuyer, setCPFBuyer] = useState()

    console.log(seats)

    const { sessionID } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionID}/seats`);
        promise.then(res => {
            setSeats(res.data.seats);
            response = res.data;
            selecting = res.data.seats;
            updateOrder(response);
            addSelect();
        });
    }, [])

    for (let i = 0; i < Object.keys(selecting).length; i++) {
        selecting[i] = {...selecting[i], isSelected: false}
    }

    function updateOrder(response) {
        setOrder({...order,
            dayDate: response.day.date,
            dayWeekday: response.day.weekday,
            dayHour: response.name
        });

        setSeatChoiced(true)
    }

    function addSelect() {
        setSeats(selecting);
    }

    function finishingOrder() {
        setOrder({...order,
            nameBuyer: nameBuyer,
            cpfBuyer: cpfBuyer
        });
 
        // saveRequest(order);
    }

    function selectThis(element) {
        console.log(element)
        console.log("foi")
    }

    function Seat({ number, isAvailable, isSelect }) {
        return(
            <span
            className={`seats-choice ${isAvailable ? "unvailable" : "available"} 
            ${isSelect ? "selected": ""}`}
            onClick={() => ""}>
                {number}
            </span>
        )
    }
    
    return (
        <div className="seats">
            <h2 className="page-title">Selecione o(s) assento(s)</h2>
            <div className="seats-content">
            {seats.map((seat, index) => (
                <Seat key={index} number={seat.name} isAvailable={seat.isAvailable} isSelect={seat.isSelected} />
            ))}
            </div>
            <div className="color-seats-menu">
                <div>
                    <span className={`seats-choice selected`}></span>
                    <h3>Selecionado</h3>
                </div>
                <div>
                    <span className={`seats-choice`}></span>
                    <h3>Disponível</h3>
                </div>
                <div>
                    <span className={`seats-choice unvailable`}></span>
                    <h3>Indisponível</h3>
                </div>
            </div>
            <div className="ending">
                <h3>Nome do comprador:</h3>
                <input type="text" name="buyer-name" placeholder="Digite seu nome..." className="input-text" value={nameBuyer} onChange={e => setNameBuyer(e.target.value)} />
                <h3>CPF do comprador:</h3>
                <input type="text" name="buyer-cpf" placeholder="Apenas números..." className="input-text" value={cpfBuyer} onChange={e => setCPFBuyer(e.target.value)} />
            </div>
            <Link to="/sucesso"><div className="button" onClick={finishingOrder}>Reservar assento(s)</div></Link>
        </div>
    )
}

export default Seats;