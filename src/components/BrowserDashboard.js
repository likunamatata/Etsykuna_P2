import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ListingCard from './ListingCard.js';


class BrowserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const loadStatus = this.props.data == '' && this.props.loaded

    const listings = this.props.data !== '' && this.props.data
    if (loadStatus == true) {
      return (
        <div className='loadingMessage'>
          <p className='loadingText'>Thank you for your patience while we load the data</p>
          <iframe src="https://giphy.com/embed/oVtYtD1k0SSDivz4rS" className="loadingImage" allowFullScreen></iframe>
        </div>
       
      )
    }
    else {
      return (
        <div className='browser'>
          <div className='dashboard'>
            <ListingCard data={listings} />
          </div>
        </div>
      )
    }

  }
}

export default BrowserDashboard;