import React from 'react';
import Autorization from './components/pages/autorization/Autorization';
import MainPage from './components/pages/mainPage/MainPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Autorization/>
      <MainPage/>
    </div>
  );
}

export default App;
