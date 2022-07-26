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

function pageOnSelected() {
  if (!movieSelected) {
      pageOn = <Movies />
  } else if (!sessionSelected) {
      pageOn = <Sessions />
  } else if (!seatSelected) {
      pageOn = <Seats />
  } else {
      pageOn = <Finishing />
  }
}

function App() {
    return(
        <>
          <Top />
          <Main  pageOn = {pageOn}/>
          <Bottom />  
        </>
    )
}

export default App;