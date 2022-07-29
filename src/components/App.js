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
const test = {};

let movieID = 5;
let sessionID = 240;
let order = "";
let isSelected = false;

function selectMovie() {
  test.push({name: "oi"})
  console.log(test)
  isSelected = true;
  console.log(isSelected)
}

function App() {
  return(
      <>
        <BrowserRouter>
          <Top />
          <Main>
              <Routes>
                <Route path="/" element={<Movies selectMovie={selectMovie} />} />
                <Route path="/filme/:movieID" element={<Sessions movieID={movieID} />} />
                <Route path="/sessao/:sessionID" element={<Seats sessionID={sessionID} />} />
                <Route path="/sucesso" element={<Finishing order={order} />} />
              </Routes>
          </Main>
          <Bottom isSelected={isSelected} />
        </BrowserRouter>
      </>
  )
}

export default App;