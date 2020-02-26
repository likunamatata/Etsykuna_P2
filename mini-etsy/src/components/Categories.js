import React from 'react';
import categories from '../data/categories.js';

function Categories(props) {
  const { handleFilter } = props
  const categoriesData = categories.results;
  const categoryOptions = categoriesData.map((category, index) => {
    return (
      <option key={index} value={category.category_id} >{category.long_name}</option>
    )
  })

  return (
    <select name='category' onChange={handleFilter}>
      <option>Category</option>
      <option>"poet blouse"</option>
      {categoryOptions}
    </select>
  )
}
export default Categories