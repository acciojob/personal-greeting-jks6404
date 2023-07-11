
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("");
  return (
    <div>
      <form>
        <label for="name">Enter your name:</label>
        <input type="text" id="name" onChange={(e) => setName(e.target.value)} ></input>
        <p>Hello {name}!</p>
      </form>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
