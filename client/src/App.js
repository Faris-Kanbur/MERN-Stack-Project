import React,{useState, useEffect} from 'react'
import './App.css';
import Axios from 'axios';


function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [listOfFriends, setListOfFriends] = useState([]);

  const addFriend = () => {
    Axios.post('http://localhost:3003/addfriend', {
      name: name,
      age: age,
    }).then(() => {
      setListOfFriends([...listOfFriends, {name: name, age: age}]);  // bu eklemesek ekranda gözükmesi icin tekra sayfanin render edilmesi gerekirdi.
    });
   
  };



useEffect(() => {
  Axios.get('http://localhost:3003/read', {
      name: name,
      age: age,
    })
      .then((response) => {
       setListOfFriends(response.data)
    })
      .catch((err) => {
       alert(err)
    });
}, []);



  return (
    <div className="App">
      <div className="inputs">
        <input type="text"  placeholder="Your name" onChange={(event) => setName(event.target.value)}/>
        <input type="number" placeholder="Your age" onChange={(event) => setAge(event.target.value)}/>
        <button onClick={addFriend}>Add Person</button>
      </div>

      <div className="listOfFriends">
      {listOfFriends.map((val) => {
        return (
          <div className="friendContainer">
            <div className="friend">
              <h3>Name: {val.name}</h3>
              <h3>Age: {val.age}</h3>  
            </div>
            <button>Update</button>
            <button>Delete</button>
          </div>
          );
       })}
       </div>
    </div>
  );
}

export default App;
