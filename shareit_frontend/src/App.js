import './App.css';
import background from './img/background.png';
import icon from './img/icon.png';
import img2 from './img/Vector.png';
import img6 from './img/Frame 2.png';
import img7 from './img/Frame 3.png';
import img8 from './img/Frame 4.png';
import img1 from './img/Group 329.png';
import img4 from './img/shareIT.png';
import img5 from './img/search2.png';
import img3 from './img/Group 332.png';
import { useState} from "react";
function App() {
  const [A,setA]=useState(false);
  return (
    <div className="background">
      
      <div>
      <img src={icon} className="icon" onClick={() => {setA(true);Open()}}></img>
      {A ? <Open></Open> : null}
      </div>
      
      </div>
  );
}
function Open() {
  
  return(
    <div className="modal">
      <div className="modalTop">
        <div>
          <img src={img1} className="content1"></img>
          </div>  
        <div className="content2"></div>
        <div>
        <img src={img2} className="content3"></img>
          </div>       
      </div>
      <div >
      <img src={img3} className="modalSec"></img>     
      </div>
      <div className="modalMain">
      <img src={img4} style={{width:"45%"}}></img>
      </div>
      <div className="modalMain">
      <img src={img5} style={{width:"45%"}}></img>
      </div>
      <div className="modalBottom">
        <div>
        <img src={img6} className="bot1"></img>
        </div>  
        <div>
        <img src={img7} className="bot2"></img>
          </div>  
        <div>
        <img src={img8} className="bot3"></img>
        </div>
      </div>
    </div>
    
  )
  
  /*useEffect(Open(),[]);*/
}
export default App;
