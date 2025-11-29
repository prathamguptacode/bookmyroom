import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Searchbox from '../components/searchbox'
import mystyle from './hotelView.module.css'
import { useSearchParams } from 'react-router-dom'
import Hotelhorizontal from '../components/Hotelhorizontal'

function Hotelview() {

  const [hotelarr,setHotelarr]=useState([])

  const [q]=useSearchParams()
  const hotel=q.get('q')
  useEffect(()=>{
    (async ()=>{
      const res=await fetch(`http://localhost:2100/view?city=${hotel}`)
      const json=await res.json()
      setHotelarr(json.data)
    })()
  },[q])

  return (
    <div className='wrapper'>
      <Navbar></Navbar>
      <div className={mystyle.space}></div>
      <Searchbox info={hotel}></Searchbox>
      {
        hotelarr.map((e)=>{
            return <Hotelhorizontal name={e.name} address={e.address} city={e.city} description={e.description}></Hotelhorizontal>
        })
      }
    </div>
  )
}

export default Hotelview
