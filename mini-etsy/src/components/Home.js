import React from 'react';
import flowers from './flowerZ.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='intro'>
      <p>Etsykuna (i.e., Mini Etsy) is an attempt at digitizing my favorite part of the vintage shopping experience. 
        That is, having a select few sellers with limited amout of highly curated products whose taste you have grown to trust
        over a number of successful purchases. 
      </p>
      <p>Go to the Notes to read about how this is an extension rather than a copy of Etsy's Favorite Shops feature and 
        why I think Richard Thaler would approve of it.
      </p>
      </div>
      <img src={flowers} alt='home img' className='homePic'/>
    </div>
  )
}

export default Home;