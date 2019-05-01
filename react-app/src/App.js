import React, { Component } from 'react';
import './App.css';
import Card from './components/Card'
import Changer from './components/Changer'

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Home</h1>
        </header>
        <section className="App-content">
          <Changer/>
        </section>
        
      </div>
    );
  }

}

export default App;
