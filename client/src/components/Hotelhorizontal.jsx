import React from 'react'
import mystyle from './hotelhorizontal.module.css'

function Hotelhorizontal({ name, city, address,description }) {
  return (
    <div className={mystyle.horizontalcard}>
      <div className={mystyle.imgbx}><img src="sample.png" alt="hotel-img" className={mystyle.hotelimg} /></div>
      <div className={mystyle.con}>
        <div className={mystyle.title}>{name}</div>
        <div className={mystyle.city}>{city}</div>
        <div className={mystyle.address}>{address}</div>
        <div className={mystyle.des}>{description}</div>
      </div>
      <button className={mystyle.btn}>Show Prices</button>
    </div>
  )
}

export default Hotelhorizontal
