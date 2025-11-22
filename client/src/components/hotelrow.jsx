import React from 'react'
import mystyle from './hotelrow.module.css'
import Hotel from './hotel'

function Hotelrow({title}) {
  return (
    <div className={mystyle.hotelrow}>
        <div className={mystyle.title}>{title}</div>
        <div className={mystyle.row}>
            {/* hotelcards */}
            <Hotel id="111"></Hotel>
        </div>
    </div>
  )
}

export default Hotelrow
