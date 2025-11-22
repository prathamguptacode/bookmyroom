import React from 'react'
import mystyle from './cards.module.css'

function Card({title,con}) {
  return (
    <div className={mystyle.card}>
        <div className="parent">
            <div className={mystyle.title}>{title}</div>
            <div className={mystyle.con}>{con}</div>
            <button className={mystyle.explore}>Explore more</button>
        </div>
        <div className={mystyle.imgbx}>
            <img src="discount.png" alt="discount-img" />
        </div>
    </div>
  )
}

export default Card
