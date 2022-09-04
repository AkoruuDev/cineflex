import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

let response = {};
let selecting = {};

function Seat({ number, isAvailable, seatID, selected, addSelect }) {
    const [getSeat, setGetSeat] = useState(false);

    return(
        <span
        className={`seats-choice ${isAvailable ? "available" : "unvailable"} 
        ${isAvailable ? getSeat ? "selected": "" : ""}`}
        onClick={() => {
            setGetSeat(!getSeat);
            addSelect(seatID, selected)            
        }}>
            {number}
        </span>
    )
}

function Seats({
    order,
    setOrder,
    setSeatChoiced
}) {
    const [seats, setSeats] = useState([]);
    const [nameBuyer, setNameBuyer] = useState("");
    const [cpfBuyer, setCPFBuyer] = useState("");
    const navigate = useNavigate();

    const { sessionID } = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionID}/seats`);
        promise.then(res => {
            setSeats(res.data.seats);
            updateOrder(res);
            selecting = res.data.seats;
            setSeats(selecting);
        });
    }, [])

    for (let i = 0; i < Object.keys(selecting).length; i++) {
        selecting[i] = {...selecting[i], selected: false}
    }

    function updateOrder(res) {
        setOrder({...order,
            dayDate: res.data.day.date,
            dayWeekday: res.data.day.weekday,
            dayHour: res.data.name
        });

        setSeatChoiced(true)
    }

    function addSelect(seatID, selected) {
        console.log(seats)
        const selectSeats = seats.map(seat => {
            if((seat.id === seatID) && (seat.isAvailable === true)) {
                return {
                    ...seat,
                    selected: !selected
                }
            }
            return { ...seat }
        })
        setSeats([ ...selectSeats ])
        console.log(seats)
    }

    function finishingOrder() {
        const mySeats = seats.filter(seat => seat.selected === true);
        console.log(mySeats);
        console.log(mySeats.length)
        if( cpfBuyer !== "" && nameBuyer !== ""  && mySeats.length !== 0) {
            setOrder({...order,
                nameBuyer: nameBuyer,
                cpfBuyer: cpfBuyer,
                mySeats: mySeats
            });
            console.log(order);
            navigate("/sucesso");
        } else {
            console.log("Coloca um alerta ae, mano!")
        }
    }

    function selectThis(element) {
        console.log(element)
        console.log("foi")
    }
    
    return (
        <div className="seats">
            <h2 className="page-title">Selecione o(s) assento(s)</h2>
            <div className="seats-content">
            {seats.map((seat, index) => (
                <Seat key={index} number={seat.name} selected={seat.selected} isAvailable={seat.isAvailable} seatID={seat.id} addSelect={addSelect}/>
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
            <div className="button" onClick={finishingOrder}>Reservar assento(s)</div>
        </div>
    )
}

export default Seats;