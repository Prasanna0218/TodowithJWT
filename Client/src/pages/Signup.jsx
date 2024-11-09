import React, { useState } from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  let [username,setusername]=useState("");
  let [email,setemail]=useState("");
  let [password,setpassword]=useState("");
  let handlesubmit=(event)=>{
    event.preventDefault();
    axios.post("http://localhost:3001/register",{username,email,password})
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})
  setusername("");
  setemail(""),
  setpassword("");
  }
  
  return (
    <div className='loginmaindiv'>
      <div className='mb-5 mt-4'>
        <h1 className='loginheading1'>To Do!</h1>
      </div>
      <div className='loginformdiv'>
        <h2 className='text-center mb-4 loginheading2'>Regsiter New User</h2>
        <form action="" onSubmit={handlesubmit}>
          <label htmlFor="fullname" className='mb-2'>Fullname:-</label>
          <br />
          <input type="text" id="fullname" placeholder='Enter Your Fullname' name='fullname' className='registerforminput mb-3' onChange={(e)=>setusername(e.target.value)} value={username}/>
          <br />
          <label htmlFor="email" className='mb-2'>Email:-</label>
          <br />
          <input type="email" id="email" placeholder='you@super.com' name='email' className='registerforminput mb-3' onChange={(e)=>setemail(e.target.value)} value={email}/>
          <br />
          <label htmlFor="password" className='mb-2'>Password:-</label>
          <br />
          <input type="password" placeholder='******' name='password' id='password' className='registerforminput mb-3 mb-6' onChange={(e)=>setpassword(e.target.value)} value={password}/>
          <br />
          <div className='text-center'>
          <button type='submit' className='loginformbtn'>Register</button>
          </div>
        </form>
        <div className='mt-4 text-center'>
        <p>Already have an Account? <Link to={'/'}> Login </Link></p>
      </div>
      </div>
    </div>
  )
}

export default Signup