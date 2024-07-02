import logo from './logo.svg';
import './App.css';
import Data, { imgLinks } from "./components/Data";
import { useState } from 'react';

function App() {
  const[index,setIndex] = useState(0);

  return (
    <div>

<div className="App" style={{display:"flex",flexDirection:"row"}}>

<div style={{display:"flex",alignItems:"center"}}>
<button style={{height:"50px", backgroundColor:"darkGrey"}}
onClick={() =>{
  if(index > 0 )
  setIndex(index-1);
else
setIndex(imgLinks.length-1);


}}
>&lt;</button>

</div>


<img width="96%" height="500px" src={imgLinks[index].url} alt="" />

<div style={{display:"flex",alignItems:"center",}}>
  <button style={{height:"50px",backgroundColor:"darkGrey"}}
   onClick={() =>{

    if( index < imgLinks.length-1)
      setIndex(index+1);
   else 
   setIndex(0);
    
  }}
  >&gt;</button>

</div>



</div>
<div style={{display:"flex",justifyContent:"center"}}>
<h1>{imgLinks[index].imgNo}</h1>

</div>
    </div>
  );
}

export default App;
