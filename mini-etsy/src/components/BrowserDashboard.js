import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ListingCard from './ListingCard.js';


function BrowserDashboard(props) {

  const listings = props.data !== '' && props.data

  return (
    <div className='browser'>
      <div className='dashboard'>
      <ListingCard data={listings}/>
      </div>

    </div>
  )
}

export default BrowserDashboard;