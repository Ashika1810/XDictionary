import './App.css';
import { useState } from 'react';

function App() {
  const [dictionary, setDictionary] = useState([

    { word: "React", meaning: "A JavaScript library for building user interfaces." },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." }

])
  const [displaymeaning, setDisplayMeaning] = useState("")
  const [searchData, setSearchData] = useState("");

  const handleClick=()=>{
    let wordFound = false;
      dictionary.forEach((item)=>{
        if(item.word.toLowerCase() === searchData.toLowerCase()){
          setDisplayMeaning(item.meaning);
          wordFound = true;
        }
      })
      if(!wordFound){
        setDisplayMeaning("Word not found in the dictionary.")
      }
  }

  return (
    <div className='container'>
        <h1>Dictionary App</h1>
        <input type='text' placeholder='Search for a word' 
        onChange={(e)=>setSearchData(e.target.value)}/>
        <button onClick={handleClick}>Search</button>
        <div>
          <h3>Definition:</h3>
          <p>{displaymeaning}</p>
        </div>
    </div>
    
  );
}

export default App;
