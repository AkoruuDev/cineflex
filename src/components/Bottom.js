let image = "https://www.claquete.com/fotos/filmes/poster/12762_medio.jpg";
let movieName = "Thor - Amor e Trovão";
let session = "Quinta-feira - 15:00";
let choiceMovie = false;

function imageSelected() {
    return (
        <div className="bottom-image">
            <img src={image} alt="folder-Movie" />
        </div>
    )
}

function infoMovie() {
    return (
        <div className="bottom-info">
            <p>{movieName}</p>
            {choiceMovie ? <p>{session}</p> : ""}
        </div>
    )
}

function Bottom() {
    return(
        <div className="bottom">
            {
                // Adicionar um ternário aqui
                // Se filme for selecionado (true), Adicionar imageSelected(), senão ""
                // choiceMovie ? imageSelected : ""
            }
            {
                // Adicionar um ternário aqui
                // Se filme for selecionado (true), Adicionar infoMovie(), senão ""
                // choiceMovie ? infoMovie : ""
            }
        </div>
    )
}

export default Bottom;