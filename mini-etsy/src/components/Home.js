import React from 'react';
import flowers from './flowerZ.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='intro'>
        <p>Functionally similar to Etsy's Favorite Shops feature, Etsykuna (i.e., Mini Etsy) is an attempt at digitizing the vintage shopping experience using only a subset of the online market's listings.
      </p>
      <p>Go to the Notes to read more about the app and why I think Richard Thaler would approve of it.
      </p>
      </div>
      <img src={flowers} alt='home img' className='homePic'/>
    </div>
  )
}

export default Home;