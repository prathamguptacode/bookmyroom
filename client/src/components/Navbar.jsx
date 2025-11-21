import info from '../assets/info.svg'
import mystyle from './navbar.module.css'
function Navbar() {
    return (
        <div className={mystyle.navbar}>
            <div className={mystyle.wrapperNav}>

            
            <div className={mystyle.uppernav}>
                <div className={mystyle.logobx}>
                    bookmyRoom
                </div>
                <div className={mystyle.rnuppernav}>
                    <div className={mystyle.country}><img src="flag.png" alt="country-flag" className={mystyle.countryImg} /></div>
                    <div className={mystyle.info}><img src={info} alt="info-svg" /></div>
                    <button className={mystyle.addprop}>List your property</button>
                    <button className={mystyle.signup}>SIGN UP</button>
                    <button className={mystyle.login}>LOG IN</button>
                </div>
            </div>
            <div className={mystyle.lowernav}>
                <div className={mystyle.opt}>Stays</div>
                <div className={mystyle.opt}>Flights</div>
                <div className={mystyle.opt}>Carpooling</div>
                <div className={mystyle.opt}>Travel Buddies</div>
            </div>
            </div>
        </div>
    )
}

export default Navbar
