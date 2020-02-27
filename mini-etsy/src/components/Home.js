import React from 'react';
import flowers from './flowerZ.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='intro'>
        <p>Functionally similar to Etsy's Favorite Shops feature, Etsykuna (i.e., Mini Etsy) is an attempt at digitizing the vintage shopping experience.
        Go to the Notes to read about my opinions on online vintage and why I think Richard Thaler would approve of the app.
      </p>
      </div>
      <img src={flowers} alt='home img' className='homePic' />
    </div>
  )
}

export default Home;