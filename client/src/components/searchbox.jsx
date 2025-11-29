import React, { useEffect, useRef, useState } from 'react'
import mystyle from './banner.module.css'
import clsx from 'clsx'
import adultsvg from '../assets/adult.svg'
import downarrow from '../assets/downarrow.svg'
import plus from '../assets/plus.svg'
import minus from '../assets/minus.svg'
import { useNavigate } from 'react-router-dom'


function Searchbox({info}) {

    function handleClick(){
    const city=input.current.value
    Navigate(`/hotels?q=${city}`)
    console.log('hello')
    }

    useEffect(()=>{
        if(info){
            input.current.value=info
        }
    },[])

    const [guestdrop, setGuestdrop] = useState(false);
    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0);
    const [rooms, setRooms] = useState(1);
    const input=useRef(null)
    const Navigate=useNavigate()
    return (
        <div className={mystyle.searchbox}>
            <input type="text" className={clsx(mystyle.expand, mystyle.city)} placeholder='Enter the City Name' ref={input}/>
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
                                <div className={mystyle.imgbx} onClick={() => setAdult((e) => e - 1)}>
                                    <img src={minus} alt="minus" className={mystyle.bxsvg} />
                                </div>
                                {adult}
                                <div className={mystyle.imgbx} onClick={() => setAdult((e) => e + 1)} >
                                    <img src={plus} alt="plus" className={mystyle.bxsvg} />
                                </div>
                            </div>
                        </div>
                        <div className={mystyle.bx}>
                            <div className={mystyle.conbx}>Children</div>
                            <div className={mystyle.addbx}>
                                <div className={mystyle.imgbx} onClick={() => setChildren((e) => e - 1)}>
                                    <img src={minus} alt="minus" className={mystyle.bxsvg} />
                                </div>
                                {children}
                                <div className={mystyle.imgbx} onClick={() => setChildren((e) => e + 1)} >
                                    <img src={plus} alt="plus" className={mystyle.bxsvg} />
                                </div>
                            </div>
                        </div>
                        <div className={mystyle.bx}>
                            <div className={mystyle.conbx}>Rooms</div>
                            <div className={mystyle.addbx}>
                                <div className={mystyle.imgbx} onClick={() => setRooms((e) => e - 1)}>
                                    <img src={minus} alt="minus" className={mystyle.bxsvg} />
                                </div>
                                {rooms}
                                <div className={mystyle.imgbx} onClick={() => setRooms((e) => e + 1)} >
                                    <img src={plus} alt="plus" className={mystyle.bxsvg} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className={mystyle.searchbtn} onClick={handleClick}>Search</button>
        </div>
    )
}

export default Searchbox
