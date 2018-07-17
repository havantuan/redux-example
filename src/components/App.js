import React, { Component } from 'react';
import './App.css';
 import FoodList from "../container/food-list";
import {FoodDetail} from "../container/foodDetail";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React and Redux</h1>
        </header>
          <h2>List Food</h2>
          <FoodList/>
          <hr></hr>
          <h2>Detail</h2>
          <FoodDetail/>
      </div>
    );
  }
}

export default App;
