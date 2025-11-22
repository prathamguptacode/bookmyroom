import React, { useState } from 'react'
import mystyle from './banner.module.css'
import clsx from 'clsx'
import adultsvg from '../assets/adult.svg'
import downarrow from '../assets/downarrow.svg'

function Banner() {

    const [guestdrop,setGuestdrop]=useState(false);
    console.log(guestdrop)

    return (
        <div className={mystyle.banner}>
            <div className={mystyle.bannerimg}>
                <div className={mystyle.can}>
                    <div className={mystyle.childcan}>

                        <div className={mystyle.title}>Rent your rooms, your way</div>
                        <div className={mystyle.content}>Welcome to bookmyRoom first platform made just for You to find great deals at great discounts!!!</div>
                    </div>
                    {/* <a href="https://www.flaticon.com/free-icons/bedroom" title="bedroom icons">Bedroom icons created by max.icons - Flaticon</a> */}
                    <div className={mystyle.imgcan}>
                        <img src="./bedroom.png" alt="bedroom-svg" className={mystyle.bed} />

                    </div>
                </div>
            </div>
            <div className={mystyle.searchbox}>
                <input type="text" className={clsx(mystyle.expand, mystyle.city)} placeholder='Enter the City Name' />
                <input type="date" name="" id="" className={clsx(mystyle.expand, mystyle.date)} />
                <div className={clsx(mystyle.expand, mystyle.guestnum)} tabIndex={-1} onClick={()=> guestdrop? setGuestdrop(false):setGuestdrop(true)} onBlur={()=> setGuestdrop(false)}>
                    <img src={adultsvg} alt="svg" className={mystyle.inperson}/>
                    <div className="textin">
                        { }adults  .  { }children . { }rooms
                    </div>
                    <img src={downarrow} alt="svg" className={mystyle.insvg} />
                    <div className={mystyle.dropguest} style={{ display: guestdrop ? 'block' : 'none' }}>
                        adults
                        children
                        pets
                    </div>
                </div>
                <button className={mystyle.searchbtn}>Search</button>
            </div>
        </div>
    )
}

export default Banner
