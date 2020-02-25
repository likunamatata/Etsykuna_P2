import React from 'react';
import './App.css';
import Header from './components/Header.js';
import ListingsContainer from './components/ListingsContainer.js';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import Notes from './components/Notes.js';
import ProductDetail from './components/ProductDetail.js';


function App() {
  return (
      <div className="App">
      <Header />
      <Route exact path='/Browse'>
          <ListingsContainer />
      </Route>
      <Route exact path='/'>
          <Home />
      </Route>
      <Route path='/Notes'>
          <Notes />
      </Route>
      <Route path={"/Browse/:listing_id"}
          render={props =>
            <ProductDetail
              listingId={props.match.params.listing_id}
            />
          } />
      </div>

  );
}

export default App;
