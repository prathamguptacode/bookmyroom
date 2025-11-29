import React from 'react'
import Newnavbar from '../components/Newnavbar'

function Listprop() {
    return (
        <div>
            <Newnavbar></Newnavbar>
            <div className="wrapper">
                <div className="contrast"></div>
                <div className="inboxs">
                    <div className="inbx">
                        <label htmlFor="name">Enter your room name</label>
                        <input type="text" id='name' className='' />
                    </div>
                    <div className="inbx">
                        <label htmlFor="description">Enter the description of your room</label>
                        <input type="text" id='description' className='' />
                    </div>
                    <div className="inbx">
                        <label htmlFor="popularFacilities">Enter the popular facilities and unique things of your room</label>
                        <input type="text" id='popularFacilities' className='' />
                    </div>
                    <div className="inbx">
                        <label htmlFor="price">Enter the price of your room</label>
                        <input type="text" id='price' className='' />
                    </div>
                    <div className="inbx">
                        <label htmlFor="address">Enter the price of your room</label>
                        <input type="text" id='address' className='' />
                    </div>
                    <div className="inbx">
                        <label htmlFor="city">Enter the city in which your room is</label>
                        <input type="text" id='city' className='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listprop
