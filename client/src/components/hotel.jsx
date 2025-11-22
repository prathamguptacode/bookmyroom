import React from 'react'
import mystyle from './hotel.module.css'

function Hotel({id}) {
  return (
    <div className={mystyle.box}>
      <div className={mystyle.imgbx}>
        <img src="sample.png" alt="hotel-img" className={mystyle.imgset} />
      </div>
      <div className={mystyle.name}>Hotel Taj</div>
      <div className={mystyle.city}>Lucknow</div>
      <div className={mystyle.price}>$100</div>
    </div>
  )
}

export default Hotel
