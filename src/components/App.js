import Top from "./Top";
import Main from "./Main";
import Bottom from "./Bottom";

import Movies from './Main/Movies';
import Sessions from './Main/Sessions';
import Seats from './Main/Seats';
import Finishing from './Main/Finishing';

let movieSelected = false;
let sessionSelected = false;
let seatSelected = false;
let pageOn = <Movies />;
let seats = {
  ids: [],
  name: "",
  cpf: "",
}

let id = 1;
let order = "";

function pageOnSelected() {
  if (!movieSelected) {
      pageOn = <Movies />
  } else if (!sessionSelected) {
      pageOn = <Sessions id = {id} />
  } else if (!seatSelected) {
      pageOn = <Seats id = {id} />
  } else {
      pageOn = <Finishing order = {order}/>
  }
}

function App() {
  return(
      <>
        <Top />
        <Main  pageOn = {pageOn} />
        <Bottom />  
      </>
  )
}

export default App;