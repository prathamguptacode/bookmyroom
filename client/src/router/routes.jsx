import React, { createContext, useEffect, useLayoutEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/homepage'
import Test from '../pages/test'
import Hotelview from '../pages/hotelview'
import Signup from '../pages/signup'
import Verify from '../pages/verify'
import Errorpage from '../pages/errorpage'
import { Access } from '../context/access'
import Login from '../pages/login'
import Listprop from '../pages/listprop'
import { useContext } from 'react'



function Myroutes() {
  const [verifyToken, setVerifyToken] = useState(null)
  const [access,setAccess]=useState(null)
  return (
    <BrowserRouter>
        <Access.Provider value={{access,setAccess}}>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/test' element={<Test />}></Route>
          <Route path='/hotels' element={<Hotelview></Hotelview>}></Route>
          <Route path='/signup' element={<Signup verifyToken={verifyToken} setVerifyToken={setVerifyToken}></Signup>}></Route>
          <Route path='/verify' element={<Verify verifyToken={verifyToken}></Verify>}></Route>
          <Route path='/error' element={<Test />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/list' element={<Listprop></Listprop>}></Route>
        </Routes>
        </Access.Provider>
    </BrowserRouter>
  )
}

export default Myroutes