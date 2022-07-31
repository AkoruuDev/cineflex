function imageSelected(order) {
    return (
        <div className="bottom-image">
            <img src={order.posterUrl} alt="folder-Movie" />
        </div>
    )
}

function infoMovie(order, seatChoiced) {
    return (
        <div className="bottom-info">
            <p>{order.movieName}</p>
            {seatChoiced ? <p>{`${order.dayWeekday} - ${order.dayHour}`}</p> : ""}
        </div>
    )
}

function thereIsOrder(order) {
    if (Object.keys(order).length !== 0) {
        return true;
    }

    return false
}

function Bottom({ order, seatChoiced }) {
    return(
        <div className="bottom">
            { thereIsOrder(order) ? imageSelected(order) : "" }
            { thereIsOrder(order) ? infoMovie(order, seatChoiced) : "" }
        </div>
    )
}

export default Bottom;