import { BrowserRouter, Routes, Route } from "react-router-dom";

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

let movieID = 5;
let sessionID = 240;
let order = "";

function App(selectMovie) {


  return(
      <>
        <BrowserRouter>
          <Top />
          <Main>
              <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/filme/:movieID" element={<Sessions movieID={movieID} />} />
                <Route path="/sessao/:sessionID" element={<Seats sessionID={sessionID} />} />
                <Route path="/sucesso" element={<Finishing order={order} />} />
              </Routes>
          </Main>
          <Bottom />
        </BrowserRouter>
      </>
  )
}

export default App;