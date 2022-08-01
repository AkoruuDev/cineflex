import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Top from "./Top";
import Main from "./Main";
import Bottom from "./Bottom";

import Movies from './Main/Movies';
import Sessions from './Main/Sessions';
import Seats from './Main/Seats';
import Finishing from './Main/Finishing';

let seats = { 
  ids: [],
  name: "",
  cpf: "",
}

function reload(order) {
  if (Object.keys(order).length !== 0) {
    window.location.reload()
  }
}

function App() {
  const [order, setOrder] = useState({});
  const [seatChoiced, setSeatChoiced] = useState(false);

  return(
      <>
        <BrowserRouter>
          <Top />
          <Main>
              <Routes>
                <Route path="/" element={<Movies reload={reload} order={order} />} />
                <Route path="/filme/:movieID" element={<Sessions order={order} setOrder={setOrder} />} />
                <Route path="/sessao/:sessionID" element={<Seats order={order} setOrder={setOrder} setSeatChoiced={setSeatChoiced} />} />
                <Route path="/sucesso" element={<Finishing order={order} />} />
              </Routes>
          </Main>
          <Bottom order={order} seatChoiced={seatChoiced} />
        </BrowserRouter>
      </>
  )
}

export default App;