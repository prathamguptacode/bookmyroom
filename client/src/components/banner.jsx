import mystyle from './banner.module.css'
import Searchbox from './searchbox'

function Banner() {

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
            <Searchbox></Searchbox>
        </div>
    )
}

export default Banner
