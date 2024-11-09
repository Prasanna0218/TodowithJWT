import React, { useState } from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  let [email,setemail]=useState("");
  let [password,setpassword]=useState("");

  let handlesubmit=()=>{
    axios.post('http://localhost:3001/login',{email,password})
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
  }
  return (
    <div className='loginmaindiv'>
      <div className='mb-5 mt-4'>
        <h1 className='loginheading1'>To Do!</h1>
      </div>
      <div className='loginformdiv'>
        <h2 className='text-center mb-5 loginheading2'>Login</h2>
        <form action="" onSubmit={handlesubmit}>
          <label htmlFor="email" className='mb-2'>Email:-</label>
          <br />
          <input type="email" id="email" placeholder='you@super.com' name='email' className='loginforminput mb-4'/>
          <br />
          <label htmlFor="password" className='mb-2'>Password:-</label>
          <br />
          <input type="password" placeholder='******' name='password' id='password' className='loginforminput mb-4 mb-6'/>
          <br />
          <div className='text-center'>
          <button type='submit' className='loginformbtn'>Login</button>
          </div>
        </form>
        <div className='mt-4 text-center'>
        <p>Don't have an account ? <Link to={'/register'}>Register Now</Link></p>
      </div>
      </div>
    </div>
  )
}

export default Login