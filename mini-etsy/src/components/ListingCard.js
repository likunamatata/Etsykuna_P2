import React from 'react';
import { NavLink } from 'react-router-dom';


function ListingCard(props) {
  const listings = props.data
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

export default ListingCard;