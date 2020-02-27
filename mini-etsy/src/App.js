import React from 'react';
import './App.css';
import Header from './components/basic/Header.js';
import ListingsContainer from './components/ListingsContainer.js';
import { Route } from 'react-router-dom';
import Home from './components/basic/Home.js';
import Notes from './components/basic/Notes.js';
import ProductDetail from './components/ProductDetail.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/Browse'>
        <ListingsContainer />
      </Route>

      <Route path={"/Browse/:listing_id"}
        render={props =>
          <ProductDetail
            listingId={props.match.params.listing_id}
          />
        } />

      <Route path='/Notes'>
        <Notes />
      </Route>

    </div>

  );
}

export default App;
