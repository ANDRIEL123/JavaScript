import React from 'react';
import logo from './logo.svg';
import './App.css';
import Conversor from './components/conversor'
import { tsConstructorType } from '@babel/types';

function App() {
  return (
    <div className="App">
      <Conversor moeda1="USD" moeda2="BRL" />
    </div>
  );
}

export default App;
