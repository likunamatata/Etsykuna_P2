import React, { Component } from 'react';
import BrowserDashboard from './BrowserDashboard.js';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Categories from './Categories.js';
import Shops from './Shops.js';

let SHOP_ID = '';
const BASE_URL = `https://openapi.etsy.com/v2/shops/`;
const LISTINGS_ENDPOINT = `/listings/active?includes=MainImage&&`;
const API_KEY = `&&api_key=${process.env.REACT_APP_API_KEY}`;
const CORS = `https://cors-anywhere.herokuapp.com/`;


class ListingsContainer extends Component {
  constructor() {
    super();
    this.state = {
      displayedData: [],
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
      displayedData: [...results1, ...results2, ...results3]
    })
  }

  //need to figure out a way to filter displayedData with the outcome of my handleFilter in category

  handleFilter = (event) => {
    console.log(`name`, event.target.name)
    console.log(`value`, event.target.value)
    const originalData = this.state.displayedData
    console.log(`original`, originalData)
    this.setState({
      [event.target.name]: event.target.value,
    })
    const filteredData = originalData.filter((listing) => {
      return listing.tags.includes(this.state.category)
    })
    console.log( `filtered`, filteredData)
    // this.setState({
    //   displayedData: filteredData
    // })
  }

  render() {
    return (
      <div className='container' >
        <div className='browseHeader'>
          <div className='filters'>
           <Shops handleChange={this.handleChange}/>
            <Categories handleFilter={this.handleFilter} />
          </div>
        </div>
        <Route exact path='/Browse'>
          <BrowserDashboard category={this.state.category} data={this.state.displayedData} />
        </Route>

      </div >

    )
  }
}

export default ListingsContainer;
