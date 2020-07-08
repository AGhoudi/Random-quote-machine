import React from 'react';
import './App.css';
import QuoteBox from './components/QuoteBox/QuoteBox';

function App() {
  return (
    <div className="App">
        <h1><span className="colored_title">Random<br/>Quote</span><br/>
            Machine
        </h1>
        <QuoteBox />
    </div>
  );
}

export default App;
