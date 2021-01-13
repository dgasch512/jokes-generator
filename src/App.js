import React, { useState, useEffect} from 'react';
import './App.css';
import CardList from "./components/CardList";
import HeadBar from "./components/HeadBar";

function App() {
  const [ jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/jokes/general/ten')
      .then(response => response.json())
      .then(yokes => {setJokes( yokes )});
  }, []) 

    return (
      
        <div>
          <HeadBar />
          <CardList jokes={jokes}/>
        </div>


    );
}

export default App;
