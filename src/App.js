import React from 'react';
import './App.scss';
import Button from './components/Button/Button.js';

import fisherbrandLogo from './assets/images/Fisherbrand-PrivateLabel-EZ.svg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={fisherbrandLogo} alt='fisherbrand logo' width='300px' />
        <h1>Please select country to continue to catalog:</h1>
      </header>
      <Button className='country'>America</Button>
      <Button className='country'>Canada</Button>
    </div>
  );
}

export default App;
