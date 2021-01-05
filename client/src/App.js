import React,{useState} from 'react'
import './App.css';
import Axios from 'axios';


function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const addFriend = () => {
    Axios.post('http://localhost:3003/addfriend', {
      name: name,
      age: age,
    })
      .then(() => {
        alert('yey, it worked ');
    })
      .catch((err) => {
       alert(err)
    });
  };
  
  return (
    <div className="App">
      <div className="inputs">
        <input type="text"  placeholder="Your name" onChange={(event) => setName(event.target.value)}/>
        <input type="number" placeholder="Your age" onChange={(event) => setAge(event.target.value)}/>
        <button onClick={addFriend}>Add Person</button>
      </div>
    </div>
  );
}

export default App;
