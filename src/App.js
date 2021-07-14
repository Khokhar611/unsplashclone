import React, {useState} from "react";
import './App.css';

function App() {
  const [image, setImage] = useState("")
  const [results,setShowImage] = useState([])
  // RFKPk__53OxoJXMkrUDb9vRI42pcAHkx76ADLlWNIsk

  const fetchData = () =>{
    fetch(`https://api.unsplash.com/search/photos?client_id=RFKPk__53OxoJXMkrUDb9vRI42pcAHkx76ADLlWNIsk&query=${image}&orientation=squarish&per_page=18&order_by=latest&orientation=squarish`
      )
      .then(res=>res.json())
      .then(data=>{
        setShowImage(data.results)
      })
  }
  return (
   <>
   <div className="unsplash" id="App">
     <label>Search</label>
     <input type="text" className="inputfield" value={image} onChange={(e) => setImage(e.target.value)}/>
     <button onClick={()=>fetchData()}>Send</button>
   </div>
   <div className="showimg">
     {
     results.map((item)=>{
     return <img className="item" key={item.id} src={item.urls.regular} alt="unsplash"/>
     })
    }
   </div>
   </>
  );
}

export default App;
