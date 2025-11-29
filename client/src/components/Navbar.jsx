import info from '../assets/info.svg'
import mystyle from './navbar.module.css'
import clsx from 'clsx'
import { Link, useNavigate } from 'react-router-dom'
import profile from '../assets/profile.svg'

function Navbar({username}) {
    const naviagate=useNavigate()
    return (
        <div className={mystyle.navbar}>
            <div className={mystyle.wrapperNav}>


                <div className={mystyle.uppernav}>
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
                        <button className={clsx(mystyle.addprop, mystyle.hover)} onClick={()=> naviagate('/list')}>List your property</button>
                        <button className={mystyle.signup} style={{display: username?'none':'block'}} onClick={()=> naviagate('/signup')}>SIGN UP</button>
                        <button className={mystyle.login} style={{display: username?'none':'block'}} onClick={()=> naviagate('/login')}>LOG IN</button>
                        <div className={clsx(mystyle.profile, mystyle.hover)} style={{display: username?'flex':'none'}}>
                            <div className={mystyle.profileimgbx}><img src={profile} alt="profilesvg" /></div>
                            <div className={mystyle.profilename}>{username}</div>
                        </div>
                    </div>
                </div>
                <div className={mystyle.lowernav}>
                    <div className={clsx(mystyle.opt, mystyle.hover)}>Stays</div>
                    <div className={clsx(mystyle.opt, mystyle.hover)}>Flights</div>
                    <div className={clsx(mystyle.opt, mystyle.hover)}>Carpooling</div>
                    <div className={clsx(mystyle.opt, mystyle.hover)}>Travel Buddies</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
