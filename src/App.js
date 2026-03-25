import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('#ffffff');

  const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: color, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;