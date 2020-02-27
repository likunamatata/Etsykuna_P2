import React, { Component } from 'react';
import BrowserDashboard from './BrowserDashboard.js';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Categories from './filters/Categories.js';
import Shops from './filters/Shops.js';
import Keywords from './filters/Keywords.js';


let SHOP_ID = '';
const BASE_URL = `https://openapi.etsy.com/v2/shops/`;
const LISTINGS_ENDPOINT = `/listings/active?includes=MainImage&&`;
const API_KEY = `&&api_key=${process.env.REACT_APP_API_KEY}`;
const CORS = `https://cors-anywhere.herokuapp.com/`;


class ListingsContainer extends Component {
  constructor() {
    super();
    this.state = {
      allData: [],
      displayedData: [],
      category: '',
      loaded: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = async (event) => {
    SHOP_ID = event.target.value;
    this.setState({
      loaded: true
    })

    this.getData(SHOP_ID)
  }

  getData = async (SHOP_ID) => {
    //Etsy API maxes out at 100 objects, but there's a multiple request workaround if you want to get more data
    const allData1 = await axios.get(CORS + `${BASE_URL}${SHOP_ID}${LISTINGS_ENDPOINT}limit=100&offset=0${API_KEY}`)
    const allData2 = await axios.get(CORS + `${BASE_URL}${SHOP_ID}${LISTINGS_ENDPOINT}limit=100&offset=100${API_KEY}`)
    const allData3 = await axios.get(CORS + `${BASE_URL}${SHOP_ID}${LISTINGS_ENDPOINT}limit=100&offset=200${API_KEY}`)

    //turning them into arrays to concatanate easily
    const results1 = allData1 !== '' ? allData1.data.results : ''
    const results2 = allData1 !== '' ? allData2.data.results : ''
    const results3 = allData1 !== '' ? allData3.data.results : ''

    this.setState({
      allData: [...results1, ...results2, ...results3],
      displayedData: [...results1, ...results2, ...results3],
    })
  }


  //need to figure out a way to filter displayedData with the outcome of my handleFilter in category

  handleFilter = (event) => {
    const originalData = this.state.allData
    const filteredData = originalData.filter((listing) => {
      return listing.tags.join().includes(event.target.value)
    })
    this.setState({
      displayedData: filteredData
    })
  }

  handleKey = (event) => {
    const originalData = this.state.allData
    const filteredData = originalData.filter((listing) => {
      return listing.title.includes(event.target.value)
    })
    this.setState({
      displayedData: filteredData
    })
  }



  render() {
    return (
      <div className='container' >
        <div className='browseHeader'>
          <Shops handleChange={this.handleChange} />

          <div className='filters'>
            <Categories
              show={this.state.loaded}
              handleFilter={this.handleFilter}
            />
            <Keywords
              show={this.state.loaded}
              handleKey={this.handleKey}
            />
          </div>

        </div>

        <Route exact path='/Browse'>
          <BrowserDashboard
            category={this.state.category}
            data={this.state.displayedData}
            loaded={this.state.loaded} />
        </Route>

      </div >

    )
  }
}

export default ListingsContainer;
