import React from 'react'
import mystyle from './hotel.module.css'

function Hotel({name,city,price}) {
  return (
    <div className={mystyle.box}>
      <div className={mystyle.imgbx}>
        <img src="sample.png" alt="hotel-img" className={mystyle.imgset} />
      </div>
      <div className={mystyle.name}>{name}</div>
      <div className={mystyle.city}>{city}</div>
      <div className={mystyle.price}>{price}</div>
    </div>
  )
}

export default Hotel
