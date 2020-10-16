import React, { useEffect, useState } from "react";
import "./App.css";
import shirt from './reactshirt.jpg'

function App() {
  
  const [show, setShow] = useState(false)
  
  return (
    <div className="App" id={!show ? "" : "img"}>
      {!show ? <button onClick={()=>setShow(true)}>Click Here</button> : <img src={shirt} />}
      
    </div>
  );
}

export default App;
