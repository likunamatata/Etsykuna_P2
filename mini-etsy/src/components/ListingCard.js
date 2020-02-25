import React from 'react';
import { NavLink } from 'react-router-dom';

function ListingCard(props) {
  return (
    <NavLink to={`/Browse/${props.listing.listing_id}`}
      className='productCard'>
      <img src={props.listing.MainImage.url_fullxfull}
        className='thumbnail'
        alt='Product Thumbnail'
      />
      <p>{props.listing.title}</p>
      <p>{props.listing.price}</p>
    </NavLink>
  )
}

export default ListingCard;