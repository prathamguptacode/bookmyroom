import Banner from '../components/banner'
import Hotelrow from '../components/hotelrow'
import Navbar from '../components/navbar'
import Offer from '../components/offer'

import React, { useContext, useEffect, useState } from 'react'
import { Access } from '../context/access'
import api from '../api/api'

function Homepage() {
  const value=useContext(Access)
  const [username,setUsername]=useState(null)

  useEffect(()=>{
    (async () => {
      try {
        try {
          const res1=await api.post('/refresh')
          const res2=await api.post('/getname',{token: res1.data.accessToken})
          setUsername(res2.data.user)
        } catch (error) {
          const res=await api.post('/getname',{token: value.access})
          setUsername(res.data.user)
        }
      } catch (error) {
        console.log(error)
      }
    })()
  },[])

  return (
    <div className="wrapper">
      <Navbar username={username}></Navbar>
      <Banner></Banner>
      <Offer></Offer>
      <Hotelrow title="good deals on hotels"></Hotelrow>
    </div>
  )
}

export default Homepage
