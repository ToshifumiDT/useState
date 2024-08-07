// src/App.jsx
import React from 'react';
import RandomValueComponent from './RandomValueComponent';
import CounterComponent from './CounterComponent';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>React useState Practice</h1>
            <RandomValueComponent />
            <CounterComponent />
        </div>
    );
}

export default App;
