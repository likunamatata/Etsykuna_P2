import React, { Component } from 'react';
import BrowserDashboard from './BrowserDashboard.js';
import { Route } from 'react-router-dom';
import axios from 'axios';
import categories from '../data/categories.js';

let SHOP_ID = '';
const BASE_URL = `https://openapi.etsy.com/v2/shops/`;
const LISTINGS_ENDPOINT = `/listings/active?includes=MainImage&&`;
const API_KEY = `&&api_key=${process.env.REACT_APP_API_KEY}`;
const CORS = `https://cors-anywhere.herokuapp.com/`;

// const IEX_TOKEN = process.env.REACT_APP_IEX_TOKEN


class ListingsContainer extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
      category: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = async (event) => {
    SHOP_ID = event.target.value;

    //Etsy API maxes out at 100 objects, but there's a multiple request workaround if you want to get more data
    const allData1 = await axios.get(CORS + `${BASE_URL}${SHOP_ID}${LISTINGS_ENDPOINT}limit=100&offset=0${API_KEY}`)
    const allData2 = await axios.get(CORS + `${BASE_URL}${SHOP_ID}${LISTINGS_ENDPOINT}limit=100&offset=100${API_KEY}`)
    const allData3 = await axios.get(CORS + `${BASE_URL}${SHOP_ID}${LISTINGS_ENDPOINT}limit=100&offset=200${API_KEY}`)

    //turning them into arrays to concatanate easily
    const results1 = allData1 !== '' ? allData1.data.results : ''
    const results2 = allData1 !== '' ? allData2.data.results : ''
    const results3 = allData1 !== '' ? allData3.data.results : ''

    this.setState({
      allData: [...results1, ...results2, ...results3]
    })
  }

  //need to figure out a way to filter allData with the outcome of my handleFilter in category

  handleFilter = (event) => {
    console.log(`before`, this.state.allData)
    this.setState({
      [event.target.name]: event.target.value,
      allData: this.state.allData.filter( data => data.category_id !== this.state.category)
    })
  }

  render() {
    const categoriesData = categories.results;
    const categoryOptions = categoriesData.map((category, index) => {
      return (
        <option key={index} value={category.category_id} >{category.long_name}</option>
      )
    })

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
            <select name='category' onChange={this.handleFilter}>
              <option>Category</option>
              {categoryOptions}
            </select>
          </div>
        </div>

        <Route exact path='/Browse'>
          <BrowserDashboard data={this.state.allData} />
        </Route>

      </div>

    )
  }
}

export default ListingsContainer;
