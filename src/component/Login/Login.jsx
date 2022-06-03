import React from 'react'
import { assets } from '../NavBar.jsx/assets';
import './login-register.scss'

function Login() {
  return (
    <div id="layout-right" className="login-page">
        <img src={assets.logoSecondaryIcon} alt="" />
        <div className='login-card'>
            <h1>Hai,<br/> selamat datang!</h1>
            <form action="" className='form-container'>
                <div className='form-control'>
                    <img src={assets.logoIcon} alt="" />
                    <input type="text" name="email" id="email" placeholder='Username'/>
                </div>
                <div className="form-control" style={{marginBottom: '50px'}}>
                    <img src={assets.logoIcon} alt="" />
                    <input type="password" name="password" placeholder='Password'/>
                    <button type='button'>eye</button>
                    <p style={{fontSize:'15px', textAlign:'right', color:'#318759'}}>Lupa password?</p>
                </div>
                <button type='submit' className='submit-btn'>Masuk</button>
                <p style={{fontWeight:'400', color:'#318759', fontSize:'13px', textAlign:'center', paddingBlock:'10px'}}>Belum punya akun? <span style={{fontWeight:'700', color:'#FEB74D'}}>Register di sini</span></p>
            </form>
        </div>
    </div>
  )
}

export default Login