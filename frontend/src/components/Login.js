import React from 'react';
import LoginImage from "../images/login-image.png";

const Login = () => {
  return (
    <div className='login-container'>
       <div className='login-box-1'>
        <h2 className='font-semibold'>Welcome to E-Commerce Site</h2>
        <h1 className='log-in-head'>Log in to Your Account</h1>
        <form>
            <p className='font-bold mt-12'>Email Address</p>
            <input className='input-box' type='email' name='email' />
            <p className='font-bold mt-6'>Password</p>
            <input className='input-box' type='password' name='password' />
            <button className='btn-login'>Login</button>
        </form>
        <p className='mt-10 font-semibold'>Don't have an account? <span className='text-[#016BF8] cursor-pointer'>Sign Up</span></p>
       </div>
       <div className='login-box-2'>
        <h1 className="discover-text">Discover What's New in E-Commerce 2.0</h1>
        <img className='w-[900px] mt-10' src={LoginImage} alt="image" />
       </div>
    </div>
  )
}

export default Login