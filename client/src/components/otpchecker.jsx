import React, { useContext, useRef, useState } from 'react'
import mystyle from './Emailtag.module.css'
import api, { setToken } from '../api/api'
import Errormessage from './errormessage';
import { Access } from '../context/access';
import { useNavigate } from 'react-router-dom';

function Otpcheck({ title, verifyToken }) {


    const navigator=useNavigate()

    const value=useContext(Access)

    const [errorDis, setErrorDis] = useState('none')
    const [con, setCon] = useState('')

    const otpval = useRef(null)
    async function submit() {
        const otp = otpval.current.value;
        setToken(verifyToken)
        const body = {
            "otp": otp
        }
        try {
            const res = await api.post('/verifyotp', body)
            console.log(res)
            value.setAccess(res.data.accessToken)
            navigator('/')
        } catch (error) {
            if (error.response.data == 'invalid otp') {
                console.log('invalid otp qoooqowkoqkwq')
                otpval.current.style.border = "2px solid rgb(245, 75, 75)"
                setErrorDis('flex')
                setCon('invalid otp')
                return
            }
            console.log(error)
        }
    }
    return (
        <div className={mystyle.otpbox}>
            <div className={mystyle.title}>
                {title}
            </div>
            <div className={mystyle.con}>
                Enter the bookmyRoom OTP which you would have recieved in you email provider inbox
            </div>
            <div className={mystyle.inbx}>
                <div className={mystyle.nobx}>
                    <label htmlFor="otp" className={mystyle.emaillabel}>Enter Your OTP</label>
                    <input type="text" placeholder='Your OTP' id='otp' className={mystyle.emailin} ref={otpval} />
                </div>
                <button className={mystyle.submitbtn} onClick={submit}>Create Account</button>
            </div>
            <div className={mystyle.terms}>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</div>
            <Errormessage title={'something went wrong'} con={con} errorDis={errorDis} setErrorDis={setErrorDis}></Errormessage>
        </div>
    )
}

export default Otpcheck
