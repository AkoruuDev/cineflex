function Finishing({ order }) {
    return (
        <div className="finishing">
            <h3 className="finish-title">Pedido feito com sucesso!</h3>
            {console.log(order)}
            <div className="finish-box">
                <h2 className="finish-subtitle">Filme e Sessão</h2>
                <p>{order.movieName}</p>
                <p>{order.dayDate} {order.dayHour}</p>
                <h2 className="finish-subtitle">Ingressos</h2>
                <h2 className="finish-subtitle">Comprador</h2>
                <p>{order.nameBuyer}</p>
                <p>{order.cpfBuyer}</p>
            </div>
            <div className="button">Voltar para Home</div>
        </div>
    )
}

export default Finishing;