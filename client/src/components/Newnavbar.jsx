import React from 'react'
import mystyle from './Newnavbar.module.css'
import clsx from 'clsx'
import info from '../assets/info.svg'
import { Link } from 'react-router-dom'

function Newnavbar() {
    return (
        <div className={mystyle.navbar}>
            <div className={mystyle.newnav}>

            <Link to='/'>
                <div className={mystyle.logobx}>
                    bookmyRoom
                </div>
            </Link>
            <div className={mystyle.rnuppernav}>
                <div className={clsx(mystyle.countrywrapper, mystyle.hover)}>
                    <div className={mystyle.country}><img src="flag.png" alt="country-flag" className={mystyle.countryImg} /></div>
                </div>
                <div className={clsx(mystyle.info, mystyle.hover)}><img src={info} alt="info-svg" /></div>
            </div>
            </div>
        </div>
    )
}

export default Newnavbar
