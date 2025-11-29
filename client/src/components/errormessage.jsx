import React from 'react'
import mystyle from './errormessage.module.css'
import cross from '../assets/cross.svg'

function Errormessage({ title, con, errorDis, setErrorDis}) {

    function close(){
        setErrorDis('none')
        // let ran=Math.random()
        // setReset(ran)
    }

    return (
        <div className={mystyle.redbx} style={{display: errorDis}}>
            <img src="error.svg" alt="error svg" className={mystyle.errorsvg} />
            <div className={mystyle.bx}>

                <div className={mystyle.title}>{title}</div>
                <div className={mystyle.con}>{con}</div>
                <div className={mystyle.cross}>
                <img src={cross} alt="cross-svg" onClick={close} />

                </div>
            </div>
        </div>
    )
}

export default Errormessage
