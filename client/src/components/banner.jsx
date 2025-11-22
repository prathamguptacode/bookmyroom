import React, { useState } from 'react'
import mystyle from './banner.module.css'
import clsx from 'clsx'
import adultsvg from '../assets/adult.svg'
import downarrow from '../assets/downarrow.svg'
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'

function Banner() {

    const [guestdrop, setGuestdrop] = useState(false);
    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
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
                <div className={clsx(mystyle.expand, mystyle.guestnum)} tabIndex={-1} onFocus={() => setGuestdrop(true)} onBlur={() => setGuestdrop(false)}>
                    <img src={adultsvg} alt="svg" className={mystyle.inperson} />
                    <div className="textin">
                        {adult} adults  .  {children} children . {rooms} rooms
                    </div>
                    <img src={downarrow} alt="svg" className={mystyle.insvg} />
                    <div className={mystyle.dropguest} style={{ display: guestdrop ? 'block' : 'none' }}>
                        <div className={mystyle.parentbx}>
                            <div className={mystyle.bx}>
                                <div className={mystyle.conbx}>Adults</div>
                                <div className={mystyle.addbx}>
                                    <div className={mystyle.imgbx} onClick={()=> setAdult((e)=> e-1)}>
                                        <img src={minus} alt="minus" className={mystyle.bxsvg} />
                                    </div>
                                    {adult}
                                    <div className={mystyle.imgbx} onClick={()=> setAdult((e)=> e+1)} >
                                        <img src={plus} alt="plus" className={mystyle.bxsvg}/>
                                    </div>
                                </div>
                            </div>
                            <div className={mystyle.bx}>
                                <div className={mystyle.conbx}>Children</div>
                                <div className={mystyle.addbx}>
                                    <div className={mystyle.imgbx} onClick={()=> setChildren((e)=> e-1)}>
                                        <img src={minus} alt="minus" className={mystyle.bxsvg} />
                                    </div>
                                    {children}
                                    <div className={mystyle.imgbx} onClick={()=> setChildren((e)=> e+1)} >
                                        <img src={plus} alt="plus" className={mystyle.bxsvg}/>
                                    </div>
                                </div>
                            </div>
                            <div className={mystyle.bx}>
                                <div className={mystyle.conbx}>Rooms</div>
                                <div className={mystyle.addbx}>
                                    <div className={mystyle.imgbx} onClick={()=> setRooms((e)=> e-1)}>
                                        <img src={minus} alt="minus" className={mystyle.bxsvg} />
                                    </div>
                                    {rooms}
                                    <div className={mystyle.imgbx} onClick={()=> setRooms((e)=> e+1)} >
                                        <img src={plus} alt="plus" className={mystyle.bxsvg}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={mystyle.searchbtn}>Search</button>
            </div>
        </div>
    )
}

export default Banner
