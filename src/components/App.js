//libs
import React, { useState, useEffect } from 'react';
import Activate from '../libs/acivate';
//components
import Atlas from './Atlas';

const App = () => {
  const [activation, setActivation] = useState(0);
  const [level, setLevel] = useState('');
  //handlers
  const handleActivation = () => {
    const activation = new Activate(
      0.1,
      0.15,
      0.0,
      0.3,
      0.15,
      0.3,
      0.1,
      0.05,
      0.005,
      0.3,
      0.12,
      0.0,
    ).ideaActivaton();
    setActivation(activation);
  };
  const handleLevel = () => {
    if (activation === 1.0) {
      setLevel('Perfect');
    }
    if (activation < 1.0 && activation >= 0.8) {
      setLevel('Good');
    }
    if (activation < 0.8 && activation >= 0.6) {
      setLevel('Average');
    }
    if (activation < 0.6 && activation >= 0.4) {
      setLevel('Bad');
    }
    if (activation < 0.4 && activation >= 0.1) {
      setLevel('Bruh...');
    }
  };
  //lifecycle methods
  useEffect(() => {
    handleLevel();
  }, [activation]);
  console.log(activation);
  return (
    <div className='app-container'>
      <button onClick={() => handleActivation()}>activate</button>
      <div className='level-container'>{level}</div>
      <div className='activation-container'>
        {parseFloat(activation).toFixed(3)}
      </div>
    </div>
  );
};

export default App;
