import React, { Component } from 'react';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <h1>hi</h1>
        <Footer/> 
      </div>
    );
  }
}

export default App;
