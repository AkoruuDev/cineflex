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

function App() {
  return(
      <>
        <BrowserRouter>
          <Top />
          <Main>
              <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/filme/:movieID" element={<Sessions />} />
                <Route path="/sessao/:sessionID" element={<Seats />} />
                <Route path="/sucesso" element={<Finishing />} />
              </Routes>
          </Main>
          <Bottom />
        </BrowserRouter>
      </>
  )
}

export default App;