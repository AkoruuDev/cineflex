let image = "https://www.claquete.com/fotos/filmes/poster/12762_medio.jpg";
let movieName = "Thor - Amor e Trovão";
let session = "Quinta-feira - 15:00";

function imageSelected() {
    return (
        <div className="bottom-image">
            <img src={image} alt="image" />
        </div>
    )
}

function infoMovie() {
    return (
        <div className="bottom-info">
            <p>{movieName}</p>
            <p>{session}</p>
        </div>
    )
}

function Bottom() {
    return(
        <div className="bottom">
            
        </div>
    )
}

export default Bottom;