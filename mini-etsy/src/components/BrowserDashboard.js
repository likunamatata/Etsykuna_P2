import React from 'react';
import { NavLink } from 'react-router-dom';

function BrowserDashboard(props) {

  let listings = [];

  if (props.data !== '') {
    const { data } = props.data
    listings = data.results;
    console.log(`listings`, listings)
  }
  else {
    console.log(`data not loaded yet`)
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