import React from 'react';
import './App.scss';
import Button from './components/Button/Button.js';

import fisherbrandLogo from './assets/images/Fisherbrand-PrivateLabel-EZ.svg';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={fisherbrandLogo} alt='fisherbrand logo' width='300px' />
        <h1>Laboratory Furnishings</h1>
        <h2>Click to select catalog:</h2>
      </header>
      <form>
        <Button
          className='emergency'
          formAction='http://fisher-emergencylab.laboutfit.com/'
        >
          Emergency Response
        </Button>
        <Button
          className='country'
          formAction='http://fisherfurniture.laboutfit.com/'
        >
          United States
        </Button>
        <Button
          className='country'
          formAction='http://fisherfurnitureca.laboutfit.com/'
        >
          Canada
        </Button>
      </form>
    </div>
  );
}

export default App;
