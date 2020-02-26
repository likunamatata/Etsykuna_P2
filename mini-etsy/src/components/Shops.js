import React from 'react';
import shops from '../data/shops.js';

function Shops(props) {
  const { handleChange } = props
  const shopsData = shops.results;
  const shopOptions = shopsData.map((shop, index) => {
    return (
      <option key={index} value={shop.name} >{shop.long_name}</option>
    )
  })

  return (
    <select name='shop' onChange={handleChange}>
      <option>Shops</option>
      {shopOptions}
    </select>
  )
}
export default Shops;