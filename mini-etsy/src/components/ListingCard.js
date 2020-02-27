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
        <div className="productSummary">
          <p className='productText'>{listing.title}</p>
          <p className='productPrice'>`${listing.price}`</p>
        </div>

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