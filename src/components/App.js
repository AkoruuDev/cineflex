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

function pageOnSelected() {
  if (!movieSelected) {
      pageOn = <Movies type = {type} />
  } else if (!sessionSelected) {
      pageOn = <Sessions type = {type} id = {id} />
  } else if (!seatSelected) {
      pageOn = <Seats type = {type} id = {id} />
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