import React, { Component } from 'react';
import Home from "./Pages/Home"

// import Social from './Component/Social';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Home/>
         {/* <Social/> */}
      </div>
    );
  }
}

export default App;
