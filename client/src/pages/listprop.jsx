import React, { useContext, useEffect, useRef, useState } from 'react'
import Newnavbar from '../components/Newnavbar'
import { Access } from '../context/access'
import api, { setToken } from '../api/api'
import { useNavigate } from 'react-router-dom'
import Errormessage from '../components/errormessage'
import Successpage from '../components/successpage'

function Listprop() {
    const [con, setCon] = useState()
    const [errorDis, setErrorDis] = useState('none')//for error messages
    const [flag,setFlag]=useState(false)//for success page
    const value = useContext(Access)
    const navigate = useNavigate()
    useEffect(() => {//only logged in user can access the page
        if (!value.access) {
            navigate('/login')
            return
        }
    })
    const name = useRef()
    const description = useRef()
    const popularFacilities = useRef()
    const price = useRef()
    const city = useRef()
    const address = useRef()
    async function submit() {
        const vname = name.current.value;
        const vdescription = description.current.value;
        const vpopularFacilities = popularFacilities.current.value;
        const vprice = price.current.value;
        const vcity = city.current.value;
        const vaddress = address.current.value;
        if (!vname) {
            setErrorDis('flex')
            setCon('please enter your name of your room')
            name.current.style.border = "2px solid rgb(245, 75, 75)"
            return
        }
        if (!vdescription) {
            setErrorDis('flex')
            setCon('please enter the description of your room')
            description.current.style.border = "2px solid rgb(245, 75, 75)"
            return
        }
        if (!vpopularFacilities) {
            setErrorDis('flex')
            setCon('please enter the facilities of your room')
            popularFacilities.current.style.border = "2px solid rgb(245, 75, 75)"
            return
        }
        if (!vprice) {
            setErrorDis('flex')
            setCon('please enter the price of your room')
            price.current.style.border = "2px solid rgb(245, 75, 75)"
            return
        }
        if (!vaddress) {
            setErrorDis('flex')
            setCon('please enter the address of your room')
            address.current.style.border = "2px solid rgb(245, 75, 75)"
            return
        }
        if (!vcity) {
            setErrorDis('flex')
            setCon('please enter the city of your room')
            city.current.style.border = "2px solid rgb(245, 75, 75)"
            return
        }
        const body = {
            name: vname, description: vdescription, popularFacilities: vpopularFacilities, price: vprice, city: vcity, address: vaddress
        }
        setToken(value.access)
        try {
            const res = await api.post('/addproperty', body)
            console.log(res)
            setFlag(true)
        } catch (error) {
            console.log(error)
        }
    }
    // const [reset,setReset]=useState(-1)//for reseting input styles
    // useEffect(()=>{
    //     if(reset>=0){
    //         name.current.style.all = "revert"
    //         description.current.style.all = "revert"
    //         popularFacilities.current.style.all = "revert"
    //         price.current.style.all = "revert"
    //         city.current.style.all = "revert"
    //         address.current.style.all = "revert"
    //     }
    //     console.log(reset)
    // },[reset])

    return (
        <div>
            <Newnavbar></Newnavbar>
            <div className="wrapper">
                <div className="contrast"></div>
                <div className="inboxs">
                    <div className="inbx">
                        <label htmlFor="name">Enter your room name</label>
                        <input type="text" id='name' className='' ref={name} />
                    </div>
                    <div className="inbx">
                        <label htmlFor="description">Enter the description of your room</label>
                        <input type="text" id='description' className='' ref={description} />
                    </div>
                    <div className="inbx">
                        <label htmlFor="popularFacilities">Enter the popular facilities and unique things of your room</label>
                        <input type="text" id='popularFacilities' className='' ref={popularFacilities} />
                    </div>
                    <div className="inbx">
                        <label htmlFor="price">Enter the price of your room</label>
                        <input type="text" id='price' className='' ref={price} />
                    </div>
                    <div className="inbx">
                        <label htmlFor="address">Enter the address of your room</label>
                        <input type="text" id='address' className='' ref={address} />
                    </div>
                    <div className="inbx">
                        <label htmlFor="city">Enter the city in which your room is</label>
                        <input type="text" id='city' className='' ref={city} />
                    </div>
                </div>
                <button onClick={submit}>submit</button>
                <Errormessage title={'something went wrong'} con={con} errorDis={errorDis} setErrorDis={setErrorDis} ></Errormessage>
                {
                    flag&&<Successpage></Successpage>
                }
            </div>
        </div>
    )
}

export default Listprop
