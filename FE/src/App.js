import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [da, setDatas] = useState();

  useEffect(() => {
    fetch('http://localhost:5000/fruit')
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.fruits);
        console.log(data);
        
      })
      .catch((err) => {
        console.log('Fetch error:', err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Shopzone</h1>
      {!da? <p>No data</p> :
      <ol>
        {
          da.map((items,i)=>(
            <li key={i}>{items}</li>
          ))
        }
      </ol>
}
    </div>
  );
}

export default App;
