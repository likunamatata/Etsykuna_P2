import React from 'react';
import flowers from './flowerZ.jpg'

function Home() {
  return (
    <div className='home'>
      <div className='intro'>
      <p>Welcome to Etsykuna!</p>
      <p>This web app is an attempt at digitizing my favorite part of the vintage shopping experience. 
        That is, having a select few sellers with limited amout of highly curated products whose taste you have grown to trust
        over a number of successful purchases. 
      </p>
      <p>Go to the Notes to read about why this approach
        may be beneficial for both sellers and buyers and 
        why I think Richard Thaler would agree.
      </p>
      </div>
      <img src={flowers} alt='home img' className='homePic'/>
    </div>
  )
}

export default Home;