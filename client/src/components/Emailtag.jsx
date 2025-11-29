import React, { useRef, useState } from 'react'
import mystyle from './Emailtag.module.css'
import api from '../api/api';
import { useNavigate } from 'react-router-dom';
import Errormessage from './errormessage';

function Emailtag({ title, verifyToken, setVerifyToken }) {

    const [errorDis, setErrorDis] = useState('none')
    const [con, setCon] = useState('')

    const inemail = useRef(null)
    const inname = useRef(null)
    const inpass = useRef(null)
    const navigate = useNavigate()


    async function submit() {
        setErrorDis('none')
        const email = inemail.current.value;
        const name = inname.current.value;
        const password = inpass.current.value;
        //validation
        if (!email) {
            setErrorDis('flex')
            setCon('please enter email')
            inemail.current.style.border = "2px solid rgb(245, 75, 75)"
        }
        if (!name) {
            setErrorDis('flex')
            setCon('please enter your name')
            inname.current.style.border = "2px solid rgb(245, 75, 75)"
        }
        if (!password) {
            setErrorDis('flex')
            setCon('please enter a valid password')
            inpass.current.style.border = "2px solid rgb(245, 75, 75)"
        }
        if (name) {
            const len = name.length;
            if (len < 3 || len > 32) {
                setErrorDis('flex')
                setCon('name cannot have less than 3 character or greater than 32 charactors')
                inname.current.style.border = "2px solid rgb(245, 75, 75)"
            }
        }

        if (email) {
            const emailreg = /^(?!.*\.\.)(?!\.)[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
            if (!emailreg.test(email)) {
                setErrorDis('flex')
                setCon('please enter a valid email')
                inemail.current.style.border = "2px solid rgb(245, 75, 75)"
                return
            }
        }
        if (password) {
            const passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+\[\]{}|\\;:'",.<>/?`~])[A-Za-z\d!@#$%^&*()_\-+\[\]{}|\\;:'",.<>/?`~]{8,}$/;
            if (!passreg.test(password)) {
                setErrorDis('flex')
                setCon('please enter a strong password with uppercases, lowercases, numericals and special character')
                inpass.current.style.border = "2px solid rgb(245, 75, 75)"
                return
            }
        }

        const body = {
            email,
            name,
            password
        }
        try {
            const res = await api.post('/signup', body)
            console.log(res.data)
            const token = res.data.signupToken
            setVerifyToken(token)
            navigate('/verify')
        } catch (error) {
            if (error.response?.data) {
                if (error.response.data.message == 'user already exists') {
                    setErrorDis('flex')
                    setCon('you already have account please login with your email from login page')
                }
                return console.log(error.response.data)
            }
            console.log(error)
        }
    }

    return (
        <div className={mystyle.emailbx}>
            <div className={mystyle.title}>
                {title}
            </div>
            <div className={mystyle.con}>
                You can sign in using your Booking.com account to access our services.
            </div>
            <div className={mystyle.inbx}>
                <div className={mystyle.nobx}>
                    <label htmlFor="name" className={mystyle.emaillabel}>Your name</label>
                    <input type="text" placeholder='Enter your name' id='name' className={mystyle.emailin} ref={inname} />
                </div>
                <div className={mystyle.nobx}>
                    <label htmlFor="email" className={mystyle.emaillabel}>Email address</label>
                    <input type="text" placeholder='Enter your email address' id='email' className={mystyle.emailin} ref={inemail} />
                </div>
                <div className={mystyle.nobx}>
                    <label htmlFor="password" className={mystyle.emaillabel}>Create a Strong Password</label>
                    <input type="password" placeholder='Password' id='password' className={mystyle.emailin} ref={inpass} />
                </div>
                <button className={mystyle.submitbtn} onClick={submit}>Continue to verify email</button>
            </div>
            <div className={mystyle.terms}>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</div>
            <Errormessage title={'something went wrong'} con={con} errorDis={errorDis} setErrorDis={setErrorDis}></Errormessage>
        </div>
    )
}

export default Emailtag
