import { Link } from "react-router-dom";

function Finishing({ order }) {
    console.log(order)
    return (
        <div className="finishing">
            <h3 className="finish-title">Pedido feito com sucesso!</h3>
            <div className="finish-box">
                <h2 className="finish-subtitle">Filme e Sessão</h2>
                <p>{order.movieName}</p>
                <p>{order.dayDate} {order.dayHour}</p>
                <h2 className="finish-subtitle">Ingressos</h2>
                {order.mySeats.map(seat => (
                    <p>{`Assento ${seat.name}`}</p>
                ))}
                <h2 className="finish-subtitle">Comprador</h2>
                <p>{`Nome: ${order.nameBuyer}`}</p>
                <p>{`CPF: ${order.cpfBuyer[0]}${order.cpfBuyer[1]}${order.cpfBuyer[2]}.${order.cpfBuyer[3]}${order.cpfBuyer[4]}${order.cpfBuyer[5]}.${order.cpfBuyer[6]}${order.cpfBuyer[7]}${order.cpfBuyer[8]}-${order.cpfBuyer[9]}${order.cpfBuyer[10]}`}</p>
            </div>
            <Link to="/"><div className="button">Voltar para Home</div></Link>
        </div>
    )
}

export default Finishing;