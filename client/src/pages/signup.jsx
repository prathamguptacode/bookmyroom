import React, { useState } from 'react'
import Newnavbar from '../components/Newnavbar'
import Emailtag from '../components/Emailtag'

function Signup({verifyToken,setVerifyToken}) {
  return (
    <div className='signup'>
      <Newnavbar></Newnavbar>
      <Emailtag title='Create an account' verifyToken={verifyToken} setVerifyToken={setVerifyToken}></Emailtag>
    </div>
  )
}

export default Signup
