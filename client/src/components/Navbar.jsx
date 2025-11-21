import info from '../assets/info.svg'
import mystyle from './navbar.module.css'
import clsx from 'clsx'

function Navbar() {
    return (
        <div className={mystyle.navbar}>
            <div className={mystyle.wrapperNav}>


                <div className={mystyle.uppernav}>
                    <div className={mystyle.logobx}>
                        bookmyRoom
                    </div>
                    <div className={mystyle.rnuppernav}>
                        <div className={clsx(mystyle.countrywrapper,mystyle.hover)}>
                            <div className={mystyle.country}><img src="flag.png" alt="country-flag" className={mystyle.countryImg} /></div>
                        </div>
                        <div className={clsx(mystyle.info,mystyle.hover)}><img src={info} alt="info-svg" /></div>
                        <button className={clsx(mystyle.addprop, mystyle.hover)}>List your property</button>
                        <button className={mystyle.signup}>SIGN UP</button>
                        <button className={mystyle.login}>LOG IN</button>
                    </div>
                </div>
                <div className={mystyle.lowernav}>
                    <div className={clsx(mystyle.opt,mystyle.hover)}>Stays</div>
                    <div className={clsx(mystyle.opt,mystyle.hover)}>Flights</div>
                    <div className={clsx(mystyle.opt,mystyle.hover)}>Carpooling</div>
                    <div className={clsx(mystyle.opt,mystyle.hover)}>Travel Buddies</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
