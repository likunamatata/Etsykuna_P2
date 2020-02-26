import React from 'react';
import { NavLink } from 'react-router-dom';

function BrowserDashboard(props) {

  let listings = [];


  if (props.data !== '') {
    const { data } = props;
    listings = data;

  }
  else {
    return (
      <h3>Welcome to my vintage playground. Choose one of my favorite shops above to get started.</h3>
    )
  }

  const productCard = listings.map((listing, index) => {
    return (

      <NavLink to={`/Browse/${listing.listing_id}`}
        className='productCard'
        key={index}>
        <img src={listing.MainImage.url_fullxfull}
          className='thumbnail'
          alt='Product Thumbnail'
        />
        <p>{listing.title}</p>
        <p>{listing.price}</p>
      </NavLink>
    )
  })


  return (
    <div className='browser'>
      <div className='dashboard'>
        {productCard}
      </div>

    </div>
  )
}

export default BrowserDashboard;