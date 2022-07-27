function Finishing({ order }) {
    return (
        <div className="finishing">
            <h3>Pedido feito com sucesso!</h3>
            {order}
            <div className="button">Voltar para Home</div>
        </div>
    )
}

export default Finishing;