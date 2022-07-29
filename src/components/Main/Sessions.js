import { useParams } from "react-router-dom";
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
                    <span key={res.id}>{res.name}</span>
                ))}
            </div>
        </div>
    )
}

function Sessions() {
    const [sessions, setSessions] = useState([])

    const {movieID} = useParams();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieID}/showtimes`);
        promise.then(res => {
            setSessions(res.data.days)
            console.log(res.data)
        });
    }, [])
    
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