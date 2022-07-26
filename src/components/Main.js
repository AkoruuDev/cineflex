function Main({ pageOn }) {
    return(
        <div className='main'>
            {
                // Adicionar um ternário aqui
                // Se movieSelected não tiver sido escolhido, mostrar <Movies />, se não (ternário 2)
                // Se sessionSelected não tiver sido escolhido, mostrar <Session />, se não (ternário 3)
                // Se seatSelected não tiver sido escolhido, mostrar <Seats />, se não <Finishing />

                // {!movieSelected ? <Movies /> : !sessionSelected ? <Session /> : !seatsSelected ? <Seats /> : <Finishing />}

                // --------------------------------------
            }

            {pageOn}
        </div>
    )
}

export default Main;