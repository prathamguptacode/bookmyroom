import React from 'react'
import mystyle from './verify.module.css'
import Newnavbar from '../components/Newnavbar'
import Otpcheck from '../components/otpchecker'

function Verify({verifyToken}) {
    if(!verifyToken){
        return <>page not found</>
    }
  return (
    <div className={mystyle.verifywrapper}>
        <Newnavbar></Newnavbar>
        <Otpcheck title={'Verify your email'} verifyToken={verifyToken}></Otpcheck>
    </div>
  )
}

export default Verify
