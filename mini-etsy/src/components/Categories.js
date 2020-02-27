import React from 'react';
import categories from '../data/categories.js';

function Categories(props) {
  const { handleFilter, show } = props
  const categoriesData = categories.results;


  const categoryOptions = categoriesData.map((category, index) => {
    return (
      <option key={index} value={category.name} >{category.long_name}</option>
    )
  })

  const dropdown =
    show && <select name='category' onChange={handleFilter} className='filter'>
      {categoryOptions}
    </select>

  return (
    dropdown
  )
}
export default Categories