import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Session({ weekday, date, times }) {
    return(
        <div className="session-box">
            <div className="day">
                {`${weekday} - ${date}`}
            </div>
            <div className="time">
                {times.map(res => (
                    <Link key={res.id} to={`/sessao/${res.id}`}><span className="button">{res.name}</span></Link>
                ))}
            </div>
        </div>
    )
}

let response;

function Sessions({
    order,
    setOrder,
    setSeatChoiced
}) {
    const [sessions, setSessions] = useState([])

    const {movieID} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);
        promise.then(res => {
            setSessions(res.data.days)
            response = res.data;
            updateOrder(response);
        });
    }, [])
    
    function updateOrder(response) {
        setOrder({... order,
            movieName: response.title,
            posterUrl: response.posterURL
        })
    }

    return (
        <div className="sessions">
            <h2 className="page-title">Selecione o horário</h2>
            <div className="sessions-time">
                {sessions.map(session => (
                    <Session key={session.id} weekday={session.weekday} date={session.date} times={session.showtimes} />
                ))}
            </div>
        </div>
    )
}

export default Sessions;