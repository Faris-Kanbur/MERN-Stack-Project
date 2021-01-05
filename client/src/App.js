import React,{useState} from 'react'
import './App.css';


function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  
  return (
    <div className="App">
      <div className="inputs">
        <input type="text"  placeholder="Your name" onChange={(event) => setName(event.target.value)}/>
        <input type="number" placeholder="Your age" onChange={(event) => setAge(event.target.value)}/>
        <button>Add Person</button>
      </div>
    </div>
  );
}

export default App;
