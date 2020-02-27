import React, { Component } from 'react';
import axios from 'axios';
import { render } from 'react-dom';
const CORS = `https://cors-anywhere.herokuapp.com/`;
const API_KEY = process.env.REACT_APP_API_KEY;
const LISTINGS_URL = `https://openapi.etsy.com/v2/listings/`;
const API_PREFACE = `?includes=MainImage&&api_key=`;

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      listingId: props.listingId,
      loaded: false
    }
  }
  componentDidMount = async () => {
    const listingData = await axios.get(CORS + LISTINGS_URL + this.state.listingId + API_PREFACE + API_KEY)
    this.setState({
      listingData: listingData,
      loaded: true
    })
  }
  render() {
    let listingObject = '';
    if (this.state.loaded == false) {
      return (
        <div className='loadingMessage'>
          <p className='loadingText'>Thank you for your patience while we load the data</p>
          <iframe src="https://giphy.com/embed/oVtYtD1k0SSDivz4rS" className="loadingImage" allowFullScreen></iframe>
        </div>
      )
    }
    else {
      listingObject = this.state.listingData.data.results[0]
      console.log(listingObject)
    }
    return (
      <div className='productDetail'>
        <img src={listingObject.MainImage.url_fullxfull} className='largePic'
          alt='Product Pic' />
        <div className='detailText'>
          <h2 className='detailTitle'>{listingObject.title}</h2>
          <a>{`$${listingObject.price}`}</a>
          <a href={listingObject.url}>
            <button>Buy on Etsy</button>
          </a>
          <p className='detailDescription'>{listingObject.description}</p>
        </div>
      </div>
    )
  }
}
export default ProductDetail;