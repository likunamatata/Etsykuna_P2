import React from 'react';

function Keywords(props) {
  const { handleKey, show } = props
  const input = show ? <input onChange={handleKey} className='filter' placeholder='Search by Keyword'/> : ''
  
  return (
    input
  )

}
export default Keywords