import React, { Component } from 'react';
import Home from './Home.js';
import BrowserDashboard from './BrowserDashboard.js';
import ProductDetail from './ProductDetail.js';
import Notes from './Notes.js';
import { Route } from 'react-router-dom';
import axios from 'axios';
let SHOP_ID = '';
const BASE_URL = `https://openapi.etsy.com/v2/shops/${SHOP_ID}listings/active?includes=MainImage&&api_key=`;
const API_KEY = process.env.REACT_APP_API_KEY;
const CORS = `https://cors-anywhere.herokuapp.com/`;
// const IEX_TOKEN = process.env.REACT_APP_IEX_TOKEN


class ListingsContainer extends Component {
  constructor() {
    super();
    this.state = {
      allData: '',
      sections: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = async (event) => {
    SHOP_ID = event.target.value;
    const allData = await axios.get(CORS + `https://openapi.etsy.com/v2/shops/${SHOP_ID}/listings/active?includes=MainImage&&limit=100&&api_key=` + API_KEY)
    console.log(`ListingContainer`, allData)
    this.setState({
      allData: allData
    })
  }

  render() {
    return (
      <div className='container'>
        <div className='browseHeader'>
          <div className='filters'>
            <select onChange={this.handleChange}>
              <option>Shop</option>
              <option value='persephonevintage'>Persephone Vintage</option>
              <option value='shopDownhouse'>Downhouse</option>
              <option value='citizenVintageBridal'>Ctz Vtg Bridal</option>
              <option value='PlushArmour'>Plush Armour</option>
            </select>
            <select>
              <option>Category</option>
              <option>Accessories</option>
              <option>Clothes</option>
            </select>
            <select>
              <option>Price Range</option>
              <option>Under $25</option>
              <option>$25 - $100</option>
            </select>
          </div>
        </div>

        <Route exact path='/Browse'>
          <BrowserDashboard data={this.state.allData} />
        </Route>


        <Route path={"/Browse/:listing_id"}
          render={props =>
            <ProductDetail
              data={this.state.allData}
              listingId={props.match.params.listing_id}
            />
          }
        />
      </div>
    )
  }
}

export default ListingsContainer;
