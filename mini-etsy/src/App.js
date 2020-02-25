import React from 'react';
import './App.css';
import Header from './components/Header.js';
import ListingsContainer from './components/ListingsContainer.js';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import Notes from './components/Notes.js';

function App() {
  return (
      <div className="App">
      <Header />
      <Route path='/Browse'>
          <ListingsContainer />
      </Route>
      <Route exact path='/'>
          <Home />
      </Route>
      <Route path='/Notes'>
          <Notes />
        </Route>
      </div>

  );
}

export default App;
