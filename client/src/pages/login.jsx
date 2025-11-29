import React, { useContext, useRef, useState } from 'react'
import Newnavbar from '../components/Newnavbar'
import mystyle from '../components/Emailtag.module.css'
import Errormessage from '../components/errormessage'
import api from '../api/api'
import { Access } from '../context/access'
import { useNavigate } from 'react-router-dom'

function Login() {

    const value=useContext(Access)

    const navigate=useNavigate()

    const [errorDis, setErrorDis] = useState('none')
    const [con, setCon] = useState('')

    const inemail = useRef(null)
    const inpass = useRef(null)

    async function submit() {
        const email = inemail.current.value;
        const pass = inpass.current.value;

        if (!email) {
            setErrorDis('flex')
            setCon('please enter your email')
            inemail.current.style.border = "2px solid rgb(245, 75, 75)"
            return
        }

        if (!pass) {
            setErrorDis('flex')
            setCon('please enter your password')
            inpass.current.style.border = "2px solid rgb(245, 75, 75)"
            return
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
        if (pass) {
            const passreg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+\[\]{}|\\;:'",.<>/?`~])[A-Za-z\d!@#$%^&*()_\-+\[\]{}|\\;:'",.<>/?`~]{8,}$/;
            if (!passreg.test(pass)) {
                setErrorDis('flex')
                setCon('please enter a strong password with uppercases, lowercases, numericals and special character')
                inpass.current.style.border = "2px solid rgb(245, 75, 75)"
                return
            }
        }

        const body = {
            email,
            password: pass
        }
        try {
            const res = await api.post('/login', body)
            value.setAccess(res.data.accessToken)
            navigate('/')
            
        } catch (error) {
            if (error.response.data) {
                console.log(error.response.data)
                if (error.response.data.message == 'invalid password') {
                    setErrorDis('flex')
                    setCon('incorrect password')
                    inpass.current.style.border = "2px solid rgb(245, 75, 75)"
                }
                if (error.response.data.message == 'invalid user') {
                    setErrorDis('flex')
                    setCon('You do not have a account with us please go to sign in to create your account')
                    inemail.current.style.border = "2px solid rgb(245, 75, 75)"
                }
                return
            }
            console.log(error)
        }



    }

    return (
        <div>
            <Newnavbar></Newnavbar>
            <div className={mystyle.emailbx}>
                <div className={mystyle.title}>
                    Log in
                </div>
                <div className={mystyle.con}>
                    You can sign in using your Booking.com account to access our services.
                </div>
                <div className={mystyle.inbx}>
                    <div className={mystyle.nobx}>
                        <label htmlFor="email" className={mystyle.emaillabel}>Email address</label>
                        <input type="text" placeholder='Enter your email address' id='email' className={mystyle.emailin} ref={inemail} />
                    </div>
                    <div className={mystyle.nobx}>
                        <label htmlFor="password" className={mystyle.emaillabel}>Enter your password</label>
                        <input type="password" placeholder='Password' id='password' className={mystyle.emailin} ref={inpass} />
                    </div>
                    <button className={mystyle.submitbtn} onClick={submit}>Log in</button>
                </div>
                <div className={mystyle.terms}>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</div>
                <Errormessage title={'something went wrong'} con={con} errorDis={errorDis} setErrorDis={setErrorDis}></Errormessage>
            </div>
        </div>
    )
}

export default Login
